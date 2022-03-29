import React from 'react';
import ArticlePageHeaderContent from './ArticlePageHeaderContent';
import ArticlesWithTitleAndBody from './ArticlesWithTitleAndBody';
import SocialMediaLinks from './SocialMediaLinks';
import Comments from './Comments';

import DummyArticles from '../../constants/DummyArticles';
import DummyArticleShareItems from '../../constants/DummyArticleShareItems';
import DummyComments from '../../constants/DummyComments';

const ArticleContent = () => {
    return (
        <div className="col-12 col-xl-10 offset-xl-1">
            <div className='article'>
                <div className='article__content'>
                    <ArticlePageHeaderContent />
                    <ArticlesWithTitleAndBody
                        articles={DummyArticles}
                    />
                    <SocialMediaLinks shareItems={DummyArticleShareItems} />
                </div>
                <Comments comments={DummyComments}/>
            </div>
        </div>
    );
};

export default ArticleContent;

