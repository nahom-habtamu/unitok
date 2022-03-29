import React from 'react';
import ArticleWithTitleAndBody from './ArticleWithTitleAndBody';

const ArticlesWithTitleAndBody = ({ articles }) => {
    const buildArticleWithTitleAndBody = () => {
        return articles.map(
            e => <ArticleWithTitleAndBody
                article={e}
                key={e.index} />
        );
    };
    return (
        <>
            {buildArticleWithTitleAndBody()}
        </>
    );
};

export default ArticlesWithTitleAndBody;