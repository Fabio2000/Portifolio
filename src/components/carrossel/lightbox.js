import React, { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useLanguage } from '../../i18n/LanguageContext';
import './lightbox.css';

/**
 * Abre o certificado em tamanho cheio.
 * Fecha no Esc, no X ou clicando no fundo; as setas navegam entre eles.
 *
 * Renderiza via portal direto no <body>: o carrossel fica dentro de uma div
 * com data-aos, e o transform que o AOS aplica cria bloco de contenção para
 * position: fixed. Sem o portal, o overlay se posicionaria contra o carrossel
 * (e ainda seria cortado pelos overflow: hidden do caminho) em vez de cobrir a tela.
 */
export default function Lightbox({ itens, indice, onFechar, onAnterior, onProximo }) {
  const { t } = useLanguage();
  const fecharRef = useRef(null);
  const dialogoRef = useRef(null);
  const focoAnterior = useRef(null);

  const atual = itens[indice];

  const aoTeclar = useCallback((event) => {
    if (event.key === 'Escape') {
      onFechar();
      return;
    }
    if (event.key === 'ArrowLeft') {
      onAnterior();
      return;
    }
    if (event.key === 'ArrowRight') {
      onProximo();
      return;
    }
    // Prende o Tab dentro do diálogo enquanto ele está aberto
    if (event.key === 'Tab' && dialogoRef.current) {
      const focaveis = dialogoRef.current.querySelectorAll('button');
      if (!focaveis.length) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (event.shiftKey && document.activeElement === primeiro) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primeiro.focus();
      }
    }
  }, [onFechar, onAnterior, onProximo]);

  useEffect(() => {
    focoAnterior.current = document.activeElement;
    const scrollTravado = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', aoTeclar);

    if (fecharRef.current) fecharRef.current.focus();

    return () => {
      document.body.style.overflow = scrollTravado;
      document.removeEventListener('keydown', aoTeclar);
      // Devolve o foco para o certificado que abriu o lightbox
      if (focoAnterior.current && focoAnterior.current.focus) {
        focoAnterior.current.focus();
      }
    };
  }, [aoTeclar]);

  const aoClicarNoFundo = (event) => {
    if (event.target === event.currentTarget) onFechar();
  };

  const legenda = `${t('certificados.alt')} ${indice + 1} ${t('certificados.de')} ${itens.length}`;

  return createPortal(
    <div
      className="lightbox"
      onClick={aoClicarNoFundo}
      role="dialog"
      aria-modal="true"
      aria-label={legenda}
      ref={dialogoRef}
    >
      <button
        type="button"
        className="lightbox-fechar"
        onClick={onFechar}
        aria-label={t('certificados.fechar')}
        title={t('certificados.fechar')}
        ref={fecharRef}
      >
        <FaTimes size={20} />
      </button>

      {itens.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-anterior"
          onClick={onAnterior}
          aria-label={t('certificados.anterior')}
          title={t('certificados.anterior')}
        >
          <FaChevronLeft size={22} />
        </button>
      )}

      <figure className="lightbox-figura" onClick={aoClicarNoFundo}>
        <img src={atual} alt={legenda} className="lightbox-img" />
        <figcaption className="lightbox-legenda">
          {indice + 1} / {itens.length}
        </figcaption>
      </figure>

      {itens.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-proximo"
          onClick={onProximo}
          aria-label={t('certificados.proximo')}
          title={t('certificados.proximo')}
        >
          <FaChevronRight size={22} />
        </button>
      )}
    </div>,
    document.body
  );
}
