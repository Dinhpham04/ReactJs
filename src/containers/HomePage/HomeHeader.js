import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {

    changeLanguage = (language) => {
        // fire action redux
        this.props.changeLanguageAppRedux(language); // vi ham changeLanguageAppRedux duoc dinh nghia ben trong component nen truy cap duoc qua props
    }
    render() {
        let language = this.props.lang; // lấy từ redux không phải lấy từ props được chuyền từ cha sang con 
        return (
            <>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className='left-content'>
                            <i className="fa-solid fa-bars"></i>
                            <div className="header-logo">

                            </div>
                        </div>

                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.specialty" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.find-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.select-room" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                <div className="sub-title"><FormattedMessage id="homeheader.check-health" /></div>
                            </div>
                        </div>

                        <div className='right-content'>
                            <div className="support">
                                <i className="fa-solid fa-question"></i>
                                <FormattedMessage id="homeheader.support" />
                            </div>
                            <div className={language == LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VI</span></div>
                            <div className={language == LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder='Tìm theo gói' />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-regular fa-hospital"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-mobile"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-microscope"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-brain"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-teeth-open"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child">
                                    <i className="fa-solid fa-code-pull-request"></i>
                                </div>
                                <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
