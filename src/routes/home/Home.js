import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import ComponentsSlider from '../../components/ComponentsSlider';
import _ from 'lodash';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function




    render() {
        const imageList = ['https://www.familydollar.com/content/dam/familydollar/products-services/products-module-image.jpg',
            'http://w3.siemens.com/mcms/automation/en/product-lifecycle-management-plm/plm-products/PublishingImages/plm-products.jpg',
            'http://d152j5tfobgaot.cloudfront.net/wp-content/uploads/2016/08/125-fall-in-love.png',
            'http://img.businessdictionary.com/share-social/terms/product.png'
        ]
        return (
            <ComponentsSlider
                isCircular={false}
                autoplay={false}
            >
                    {
                        _.map(imageList, (imgSrc, i) => (<div key={i}>
                            <img
                                role='presentation'
                                src={imgSrc}/>
                        </div>))
                    }
            </ComponentsSlider>
        );
    }

}


Home.contextTypes = {};

export default withStyles(s)(Home);
