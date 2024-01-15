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
                    <a href="index.html" data-type="index-link">super-hero-manager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
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
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' : 'data-bs-target="#xs-components-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' :
                                            'id="xs-components-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' }>
                                            <li class="link">
                                                <a href="components/AddHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddHeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteHeroDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteHeroDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModifyHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModifyHeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MosaicHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MosaicHeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchHeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllHeroesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllHeroesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' : 'data-bs-target="#xs-directives-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' :
                                        'id="xs-directives-links-module-AppModule-b06c25d75e1b629e395fe898095055a5bc426d9ce8e287e1084b228e9c245232f9dcb88eca512cb83daa20151cb8497669f847cbe4afb7401513e9120c17c3cd"' }>
                                        <li class="link">
                                            <a href="directives/UppercaseDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UppercaseDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UppercaseInputDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UppercaseInputDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/HeroService.html" data-type="entity-link" >HeroService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/GetHeroesResponse.html" data-type="entity-link" >GetHeroesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hero.html" data-type="entity-link" >Hero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeroList.html" data-type="entity-link" >HeroList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HeroQueryParams.html" data-type="entity-link" >HeroQueryParams</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});