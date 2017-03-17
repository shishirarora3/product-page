import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import ComponentsSlider from '../../components/ComponentsSlider';
import _ from 'lodash';
import cx from 'classnames';

class Home extends Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props, {setTitle, setMeta}) {
        super(props);
        const CatalogEntryView = _.get(props.data, 'CatalogEntryView[0]');
        const title = this.title = CatalogEntryView.title;
        setTitle(title);
        setMeta(title);
    }

    state = {
        selectedIndex: 0,
        clicked: false,
        value: 1
    };

    onChangeHandler = selectedIndex => this.setState({selectedIndex});

    onValueChange = (newValue) => {
        newValue = newValue > 0 ? newValue : this.state.value;
        this.setState(
            {
                value: newValue
            })
    };

    render() {

        const {selectedIndex, clicked, value} = this.state;
        const data = this.props.data;
        const imageList = _.get(data, 'CatalogEntryView[0].Images[0].AlternateImages', []).map(i => _.get(i, 'image'));
        const CatalogEntryView = _.get(data, 'CatalogEntryView[0]');
        const [ItemDescription = [], OfferPrice, PackageDimension, Promotions, purchasingChannelCode,
            inventoryStatus, legalCopy] = _.at(CatalogEntryView, [
            'ItemDescription[0].features',
            'Offers[0].OfferPrice[0]',
            'PackageDimension',
            'Promotions',
            'purchasingChannelCode',
            'inventoryStatus',
            'ReturnPolicy[0].legalCopy'
        ]);
        const [currencyCode, formattedPriceValue, priceQualifier, priceValue] = _.at(OfferPrice, ['currencyCode', 'formattedPriceValue', 'priceQualifier', 'priceValue']);
        return (
            <div className={s.container}>
                <div>
                    <h1>{this.title}</h1>
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
                <div className={s.rightSide}>
                    <div className={s.price}>{formattedPriceValue}<sub>{priceQualifier}</sub></div>
                    <div className={s.hr}/>
                    <div>{_.map(Promotions, (p, i) => <div
                        key={i}>{_.get(p, 'Description[0].shortDescription')}</div>)}
                    </div>
                    <div className={s.hr}/>
                    <div className={s.quantity}>
                        <div>quantity:</div>
                        <div className={s.circle}
                             onClick={() => this.onValueChange(value - 1)}>-</div>
                        <input
                            type="number"
                            value={value}
                            min={1}
                            onChange={(e) => {
                                let newValue = _.get(e, 'target.value', value);
                                this.onValueChange(+newValue);
                            }}
                        />
                        <div
                            className={s.circle}
                            onClick={() => this.onValueChange(value + 1)}>+</div>
                    </div>
                    <div className={s.buttonGroup}>
                        {_.includes(['0', '1'], purchasingChannelCode) &&
                        <button className={s.left}>ADD TO CART</button>}
                        {_.includes(['0', '2'], purchasingChannelCode) &&
                        <button className={s.right}>PICK UP IN STORE</button>}
                    </div>
                    <div className={s.row} onClick={() => this.setState({clicked: !clicked})}>
                        <div className={s.returns}>Returns</div>
                        <div className={cx({
                            [s.clicked]: clicked,
                            [s.dots]: true
                        })} dangerouslySetInnerHTML={{__html: `<p>${legalCopy}</p>`}}></div>
                    </div>
                    <h2>Product highlights</h2>
                    <ul>
                        {_.map(ItemDescription, (des, i) => <li key={i}
                                                                dangerouslySetInnerHTML={{__html: des}}/>)}
                    </ul>
                </div>
            </div>
        );
    }

}

Home.contextTypes = {
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired
}

export default withStyles(s)(Home);
