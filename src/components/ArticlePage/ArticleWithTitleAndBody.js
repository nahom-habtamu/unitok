import React from 'react';

const ArticleWithTitleAndBody = ({ article }) => {
    const renderListTypeBodyItem = (bodyItem) => {
        return <ul>
            {bodyItem.children.map(e => <li>{e}</li>)}
        </ul>;
    };

    const renderParagraphOrBlockQuoteTypeBodyItem = (e) => {
        return e.blockQuote ? <blockquote>
            {e.content}
        </blockquote> : <p>
            {e.content}
        </p>;
    };

    const buildArticleBodyContent = () => {
        return article.bodyItems.map(e => {
            if (!e.children) {
                return renderParagraphOrBlockQuoteTypeBodyItem(e);
            }
            else {
                return renderListTypeBodyItem(e);
            }
        });
    };

    return (
        <>
            <h1>{article.title}</h1>
            {buildArticleBodyContent()}
        </>
    );
};

export default ArticleWithTitleAndBody;