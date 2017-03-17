import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import ComponentsSlider from '../../components/ComponentsSlider';
import _ from 'lodash';


class Home extends Component { // eslint-disable-line react/prefer-stateless-function
    state = {selectedIndex: 0};
    onChangeHandler = (selectedIndex) => {
        this.setState({selectedIndex});
    };

    render() {

        const selectedIndex = this.state.selectedIndex;
        const data = this.props.data;
        const imageList = _.get(data, 'CatalogEntryView[0].Images[0].AlternateImages', []).map(i => _.get(i, 'image'));
        const CatalogEntryView = _.get(data, 'CatalogEntryView[0]');
        const [ItemDescription = [], OfferPrice, PackageDimension, Promotions, purchasingChannelCode,
            inventoryStatus, title, legalCopy] = _.at(CatalogEntryView, [
            'ItemDescription[0].features',
            'Offers[0].OfferPrice[0]',
            'PackageDimension',
            'Promotions',
            'purchasingChannelCode',
            'inventoryStatus',
            'title',
            'ReturnPolicy[0].legalCopy'
        ]);
        const [currencyCode, formattedPriceValue, priceQualifier, priceValue] = _.at(OfferPrice, ['currencyCode', 'formattedPriceValue', 'priceQualifier', 'priceValue']);
        return (
            <div className={s.container}>
                <div>
                    <h1>{title}</h1>
                    <ComponentsSlider
                        isCircular={true}
                        autoplay={false}
                        onChangeHandler={this.onChangeHandler}
                        index={selectedIndex}
                    >
                        {
                            _.map(imageList, (imgSrc, i) => (
                                <div key={i} className={s.preview}>
                                    <img
                                        role='presentation'
                                        src={imgSrc}/>
                                </div>))
                        }
                    </ComponentsSlider>
                    <div className={s.row}>
                        <ComponentsSlider
                            isCircular={false}
                            autoplay={false}
                            noOfSlidesShown={3}
                        >
                            {
                                _.map(imageList, (imgSrc, i) => (
                                    <div key={i} className={s.cell} onClick={() => this.onChangeHandler(i)}>
                                        <img
                                            role='presentation'
                                            src={imgSrc}/>
                                    </div>))
                            }
                        </ComponentsSlider>
                    </div>
                </div>
                <div className={s.right}>
                    <div>{formattedPriceValue}<sub>{priceQualifier}</sub></div>

                    <div>{_.map(Promotions, (p,i)=><div key={i}>{_.get(p,'Description[0].shortDescription')}</div>)}</div>
                    <input type="number" min={1}/>
                    <div className={s.buttonGroup}>
                        {_.includes(['0','1'], purchasingChannelCode) && <button>ADD TO CART</button>}
                        {_.includes(['0','2'], purchasingChannelCode) && <button>PICK UP IN STORE</button>}
                    </div>
                    <div><div className={s.verticalSeparator}>Returns</div><div dangerouslySetInnerHTML={{ __html: `<p>${legalCopy}</p>` }}></div></div>
                    <h2>Product highlights</h2>
                    <ul>
                        {_.map(ItemDescription, (des, i) => <li key={i} dangerouslySetInnerHTML={{ __html: des }}></li>)}
                    </ul>
                </div>
            </div>
        );
    }

}


export default withStyles(s)(Home);
