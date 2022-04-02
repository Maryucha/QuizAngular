'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Quiz 1.0 Documentation Technical</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a130f3a2a419d607b957314150b41d189a8b8fffe2d141ff305865a2fd732f3a320b2eaa528ca5982621945b887abf1f4d3631d5b4eafa60f33395d71c13eb7c"' : 'data-target="#xs-components-links-module-AppModule-a130f3a2a419d607b957314150b41d189a8b8fffe2d141ff305865a2fd732f3a320b2eaa528ca5982621945b887abf1f4d3631d5b4eafa60f33395d71c13eb7c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a130f3a2a419d607b957314150b41d189a8b8fffe2d141ff305865a2fd732f3a320b2eaa528ca5982621945b887abf1f4d3631d5b4eafa60f33395d71c13eb7c"' :
                                            'id="xs-components-links-module-AppModule-a130f3a2a419d607b957314150b41d189a8b8fffe2d141ff305865a2fd732f3a320b2eaa528ca5982621945b887abf1f4d3631d5b4eafa60f33395d71c13eb7c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-18240125395b6355d471fca598e2a94d331b815fde0c50d5f5cf87e3300a91c993690380aba94edcdf5ea3223dd39d96b16045cd95a7a68accd58473c2b21c66"' : 'data-target="#xs-components-links-module-SharedModule-18240125395b6355d471fca598e2a94d331b815fde0c50d5f5cf87e3300a91c993690380aba94edcdf5ea3223dd39d96b16045cd95a7a68accd58473c2b21c66"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-18240125395b6355d471fca598e2a94d331b815fde0c50d5f5cf87e3300a91c993690380aba94edcdf5ea3223dd39d96b16045cd95a7a68accd58473c2b21c66"' :
                                            'id="xs-components-links-module-SharedModule-18240125395b6355d471fca598e2a94d331b815fde0c50d5f5cf87e3300a91c993690380aba94edcdf5ea3223dd39d96b16045cd95a7a68accd58473c2b21c66"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ViewsModule-611cadd994fe36c48cd3fc3170922073d27e695ab58eabac3f51dd3a6d7f0da454f16f34af32d6e1a53f06c86e6a41839056b4de96c622ff2f09a75af45c4314"' : 'data-target="#xs-components-links-module-ViewsModule-611cadd994fe36c48cd3fc3170922073d27e695ab58eabac3f51dd3a6d7f0da454f16f34af32d6e1a53f06c86e6a41839056b4de96c622ff2f09a75af45c4314"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-611cadd994fe36c48cd3fc3170922073d27e695ab58eabac3f51dd3a6d7f0da454f16f34af32d6e1a53f06c86e6a41839056b4de96c622ff2f09a75af45c4314"' :
                                            'id="xs-components-links-module-ViewsModule-611cadd994fe36c48cd3fc3170922073d27e695ab58eabac3f51dd3a6d7f0da454f16f34af32d6e1a53f06c86e6a41839056b4de96c622ff2f09a75af45c4314"' }>
                                            <li class="link">
                                                <a href="components/QuestionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsRoutingModule.html" data-type="entity-link" >ViewsRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});