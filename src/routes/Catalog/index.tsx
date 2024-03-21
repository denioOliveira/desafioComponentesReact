import React from 'react';
import CardCatalog from '../../components/CardCatalog';
import CommentCatalog from '../../components/CommentCatalog';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './styles.css';

export default function Catalog() {
  const renderCardCatalogs = (count: number) => {
    const cardCatalogs = [];
    for (let i = 0; i < count; i++) {
      cardCatalogs.push(<CardCatalog key={i} />);
    }
    return cardCatalogs;
  };

  const renderCommentCatalogs = (count: number) => {
    const commentCatalogs = [];
    for (let i = 0; i < count; i++) {
      commentCatalogs.push(<CommentCatalog key={i} />);
    }
    return commentCatalogs;
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <h3 className='ct-title-section ct-mg-top-25 ct-mg-bottom-25'>Venha nos visitar</h3>
          {renderCardCatalogs(2)}
        </section>

        <section id='comment'>
          <h3 className='ct-title-section'>O que estão dizendo</h3>
          {renderCommentCatalogs(5)}
        </section>
      </main>
      <Footer />
    </>
  );
}
