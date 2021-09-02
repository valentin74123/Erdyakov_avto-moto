import React from "react";
import PropTypes from "prop-types";
import {changeInfoTab} from "../../store/actions";
import {connect} from "react-redux";
import {TabName} from "../../const";

import Specifications from "../specifications/specifications";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";

const Tabs = (props) => {
  const {activeInfoTab, onInfoTabChange} = props;

  return (
    <section className="tabs">
      <ul className="tabs__list list">
        <li className="tabs__item">
          <a
            className={`tabs__link
              ${activeInfoTab === TabName.SPECIFICATIONS ? `tabs__link--active` : ``} link`
            }
            onClick={() => {
              onInfoTabChange(TabName.SPECIFICATIONS);
            }}
            href="#specifications"
          >Характеристики</a>
        </li>

        <li className="tabs__item">
          <a
            className={`tabs__link
              ${activeInfoTab === TabName.REVIEWS ? `tabs__link--active` : ``} link`
            }
            onClick={() => {
              onInfoTabChange(TabName.REVIEWS);
            }}
            href="#reviews"
          >Отзывы</a>
        </li>

        <li className="tabs__item">
          <a
            className={`tabs__link
              ${activeInfoTab === TabName.CONTACTS ? `tabs__link--active` : ``} link`
            }
            onClick={() => {
              onInfoTabChange(TabName.CONTACTS);
            }}
            href="#contacts"
          >Контакты</a>
        </li>
      </ul>

      <div className="info-tab__slides">
        {activeInfoTab === TabName.SPECIFICATIONS && (
          <Specifications />
        )}

        {activeInfoTab === TabName.REVIEWS && (
          <Reviews />
        )}

        {activeInfoTab === TabName.CONTACTS && (
          <Contacts />
        )}
      </div>
    </section>
  );
};

Tabs.propTypes = {
  activeInfoTab: PropTypes.string.isRequired,
  onInfoTabChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  activeInfoTab: state.TABS.activeInfoTab,
});

const mapDispatchToProps = (dispatch) => ({
  onInfoTabChange(tab) {
    dispatch(changeInfoTab(tab));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
