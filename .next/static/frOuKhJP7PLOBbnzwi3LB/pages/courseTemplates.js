(window.webpackJsonp=window.webpackJsonp||[]).push([["042e"],{yU8R:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/courseTemplates",function(){var e=a("zlhV");return{page:e.default||e}}])},zlhV:function(e,t,a){"use strict";a.r(t);var l=a("0iUn"),n=a("sLSF"),i=a("MI3g"),s=a("a7VT"),r=a("AT/M"),o=a("Tit0"),c=a("vYYK"),u=a("q1tI"),m=a.n(u),d=a("RsOY"),p=a.n(d),b=a("EABn"),f=a("/NWr"),h=[{value:"sessions",label:"Number Of Sessions"},{value:"estimatedTotalCourseWork",label:"Estimated Total Course Work"},{value:"lessons",label:"Number Of Lessons"}],E=function(e,t){return e.sessions>t.sessions?-1:0},v=function(e,t){return e.lessons>t.lessons?-1:0},g=function(e,t){return e.estimatedTotalCourseWork>t.estimatedTotalCourseWork?-1:0},N=function(e){function t(e){var a;return Object(l.default)(this,t),a=Object(i.default)(this,Object(s.default)(t).call(this,e)),Object(c.a)(Object(r.default)(a),"onToggleShowFilters",function(){return a.setState(function(e){return{open:!e.open}})}),Object(c.a)(Object(r.default)(a),"onClearFilters",function(){return a.setState({title:"",sort:""},a.props.onClearFilters)}),Object(c.a)(Object(r.default)(a),"onChangeTitleSearch",function(e){var t=e.target.value;return a.setState({title:t})}),Object(c.a)(Object(r.default)(a),"handleSortChange",function(e){var t=a.props.onSetSort;return a.setState({sort:e}),t(e)}),Object(c.a)(Object(r.default)(a),"submitNameFilter",function(){var e=a.props,t=e.onSetFilteredState,l=e.onUnsetFilteredState,n=a.state.title;""===n&&l(),t(n.replace(/\s/g,"").toLowerCase())}),a.state={open:!0,title:"",sort:""},a}return Object(o.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=this.state,t=e.sort,a=e.open,l=e.title,n=this.props,i=n.onClearFilters,s=n.subjectFilters,r=n.sourceFilters,o=n.handleFilterClick;return m.a.createElement("div",{className:"filter-form-holder"},m.a.createElement("ul",{className:"collapsible expandable",style:{minHeight:"0"}},m.a.createElement("li",null,m.a.createElement("div",{className:"collapsible-body",style:a?{display:"block"}:{display:"none"}},m.a.createElement("div",{className:"filter-form_checkbox-list-holder justify-center"},m.a.createElement("ul",{className:"filter-form_checkbox-list"},m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"reading",checked:-1!==s.indexOf("reading"),onChange:function(){return o("subject","reading")}}),m.a.createElement("label",{htmlFor:"reading"},"Reading")),m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"writing",checked:-1!==s.indexOf("writing"),onChange:function(){return o("subject","writing")}}),m.a.createElement("label",{htmlFor:"writing"},"Writing")),m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"math",checked:-1!==s.indexOf("math"),onChange:function(){return o("subject","math")}}),m.a.createElement("label",{htmlFor:"math"},"Math")),m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"all",checked:-1!==s.indexOf("all"),onChange:function(){return o("subject","all")}}),m.a.createElement("label",{htmlFor:"all"},"All"))),m.a.createElement("ul",{className:"filter-form_checkbox-list"},m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"builtIn",checked:-1!==r.indexOf("builtIn"),onChange:function(){return o("source","builtIn")}}),m.a.createElement("label",{htmlFor:"builtIn"},"Built-In")),m.a.createElement("li",null,m.a.createElement("input",{type:"checkbox",id:"userCreated",checked:-1!==r.indexOf("userCreated"),onChange:function(){return o("source","userCreated")}}),m.a.createElement("label",{htmlFor:"userCreated"},"User Created")))),m.a.createElement("div",{className:"d-flex row mb-0 justify-center"},m.a.createElement("div",{className:"col s12 m3"},m.a.createElement("div",{className:"search-field input-field"},m.a.createElement("input",{type:"search",id:"course_search",className:"input-control validate",value:l,onChange:this.onChangeTitleSearch}),m.a.createElement("button",{type:"submit",className:"search-button",onClick:this.submitNameFilter},m.a.createElement("i",{className:"icon-search"})),m.a.createElement("label",{className:"label",htmlFor:"course_search"},"Search"))))),m.a.createElement("div",{className:"row mb-0 d-flex align-items-center"},m.a.createElement("div",{className:"col s12 l4"},m.a.createElement("div",{className:"row mb-0"},m.a.createElement("div",{className:"col s12 xl7"},m.a.createElement("div",{className:"input-field",style:{marginBottom:"0",marginTop:"0"}},m.a.createElement(b.a,{value:Object(f.a)(t,h),onChange:this.handleSortChange,options:h,label:"Sort By",stateKey:"topic",dropdownKey:"topic"}))))),m.a.createElement("div",{className:"col s12 l4 hide-on-med-and-down show-on-large"}," "),m.a.createElement("div",{className:"col s12 l4"},m.a.createElement("div",{className:"option-filters"},m.a.createElement("div",{className:"option-item clear"},m.a.createElement("a",{href:"#",onClick:i},"Clear Filters")),m.a.createElement("div",{className:"option-item"},m.a.createElement("span",{className:"collapsible-header",onClick:this.onToggleShowFilters},m.a.createElement("span",{className:"open-text"},a?"Hide Filters":"Open Filters")))))))))}}]),t}(m.a.Component),O={builtIn:"Built-In",userCreated:"User Created"},j=function(e){function t(e){var a;return Object(l.default)(this,t),a=Object(i.default)(this,Object(s.default)(t).call(this,e)),Object(c.a)(Object(r.default)(a),"handleDropdownClick",function(e){var t=a.props,l=t.onSetDropdown,n=t.onCloseDropdown,i=t.dropdownIsOpen,s=t.index;return e.preventDefault(),i?n():l(s)}),Object(c.a)(Object(r.default)(a),"toggleEditModal",function(e){var t=a.props.onToggleEditModal;e.preventDefault(),t()}),Object(c.a)(Object(r.default)(a),"toggleExpandedState",function(){return a.setState(function(e){return{expanded:!e.expanded}})}),a.state={expanded:!1},a}return Object(o.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e,t=this.props,a=t.template,l=t.dropdownIndex,n=t.dropdownIsOpen,i=t.index,s=a.title,r=a.source,o=a.sessions,c=a.estimatedTotalCourseWork,u=a.lessons,d=a.description,p=a.instructions,b=this.state.expanded;return m.a.createElement("div",{className:"card-main-col col s12 l6"},m.a.createElement("div",{className:"card-template card"},m.a.createElement("i",{className:"icon-module icon-position-left"}),m.a.createElement("ul",{className:"collapsible expandable"},m.a.createElement("li",null,m.a.createElement("div",{className:"collapsible-card card-panel"},m.a.createElement("div",{className:"card-panel-row align-items-start row"},m.a.createElement("div",{className:"col s10"},m.a.createElement("div",{className:"card-header-block"},m.a.createElement("h3",{className:"h4 collapsible-title"},s),m.a.createElement("div",{className:"meta-info"},m.a.createElement("dl",{className:"dl-horizontal"},m.a.createElement("dt",null,"Source:"),m.a.createElement("dd",null,O[r]))))),m.a.createElement("div",{className:"col s2 right-align"},m.a.createElement("div",{className:"row icons-row"},m.a.createElement("div",{className:"dropdown-block col"},m.a.createElement("a",{className:"dropdown-trigger btn",href:"#","data-target":"dropdown02",onClick:this.handleDropdownClick},m.a.createElement("i",{className:"material-icons dots-icon"},"more_vert")),n&&l===i?m.a.createElement("ul",{id:"dropdown02",className:"dropdown-content dropdown-wide",style:{display:"block",transformOrigin:"0px 0px 0px",opacity:"1",transform:"scaleX(1) scaleY(1)"}},m.a.createElement("li",null,m.a.createElement("a",{href:"#",className:"modal-trigger link-block",onClick:this.toggleEditModal},"Edit")),m.a.createElement("li",null,m.a.createElement("a",{href:"#!",className:"link-delete"},"Delete"))):null),m.a.createElement("div",{className:"col right-align"},m.a.createElement("span",{onClick:this.toggleExpandedState,className:"collapsible-header collapsible-opener"},m.a.createElement("i",{className:"custom-icon-triangle-right color-black"})))))),m.a.createElement("div",{className:"d-flex justify-content-center align-items-center row mb-0"},m.a.createElement("div",{className:"col m6"},m.a.createElement("ul",{className:"points-list list-two-cols badge-circle-78"},m.a.createElement("li",{className:"style-purple-dark"},m.a.createElement("span",{className:"badge-circle"},o),m.a.createElement("span",{className:"point-text"},"Sessions")),m.a.createElement("li",{className:"style-pink"},m.a.createElement("span",{className:"badge-circle"},(e=c,Math.floor(e/60))," ",m.a.createElement("span",{className:"badge-text"},"hrs")),m.a.createElement("span",{className:"point-text"},"Estimated Total Course Work")))),m.a.createElement("div",{className:"col"},m.a.createElement("div",{className:"chart-block chart-block-140"},m.a.createElement("div",{className:"js-donut-chart","data-stroke-width":"42","data-source":"./inc/score-data-multiline.json"}),m.a.createElement("div",{className:"chart-text"},m.a.createElement("span",{className:"value"},u),m.a.createElement("span",{className:"description"},"Lessons")))))),m.a.createElement("div",{className:"card-content collapsible-body",style:{display:b?"block":"none"}},m.a.createElement("dl",null,m.a.createElement("dt",null,m.a.createElement("strong",{className:"dl-title"},"Description:")),m.a.createElement("dd",null,m.a.createElement("p",null,d))),m.a.createElement("dl",null,m.a.createElement("dt",null,m.a.createElement("strong",{className:"dl-title"},"Instructions:")),m.a.createElement("dd",null,m.a.createElement("p",null,p))))))))}}]),t}(m.a.Component),w=[{title:"Template name 1",source:"userCreated",sessions:31,estimatedTotalCourseWork:3660,lessons:98,subject:"reading",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."},{title:"Template name 2",source:"builtIn",sessions:19,estimatedTotalCourseWork:2198,lessons:102,subject:"writing",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."},{title:"Template name 3",source:"userCreated",sessions:19,estimatedTotalCourseWork:4102,lessons:125,subject:"math",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."},{title:"Template name 4",source:"builtIn",sessions:22,estimatedTotalCourseWork:4e3,lessons:131,subject:"reading",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."},{title:"Template name 5",source:"userCreated",sessions:12,estimatedTotalCourseWork:2981,lessons:91,subject:"writing",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."},{title:"Template name 6",source:"builtIn",sessions:35,estimatedTotalCourseWork:1249,lessons:88,subject:"math",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonum-my nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",instructions:"Quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulpu-tate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent."}],F=function(e){function t(e){var a;return Object(l.default)(this,t),a=Object(i.default)(this,Object(s.default)(t).call(this,e)),Object(c.a)(Object(r.default)(a),"onClearFilters",function(){return a.setState({subjectFilters:[],sourceFilters:[],titleFilter:"",sort:""})}),Object(c.a)(Object(r.default)(a),"onSetSort",function(e){return a.setState({sort:e})}),Object(c.a)(Object(r.default)(a),"onSetFilteredState",function(e){return a.setState({templatesAreFiltered:!0,titleFilter:e})}),Object(c.a)(Object(r.default)(a),"onUnsetFilteredState",function(){return a.setState({templatesAreFiltered:!1,titleFilter:""})}),Object(c.a)(Object(r.default)(a),"onSetDropdown",function(e){return a.setState({dropdownIndex:e,dropdownIsOpen:!0})}),Object(c.a)(Object(r.default)(a),"onCloseDropdown",function(){return a.setState({dropdownIsOpen:!1})}),Object(c.a)(Object(r.default)(a),"onToggleEditModal",function(){return a.setState(function(e){return{editModalOpen:!e.editModalOpen}})}),Object(c.a)(Object(r.default)(a),"onSortTemplates",function(e){switch(a.state.sort){case"sessions":return e.sort(E);case"estimatedTotalCourseWork":return e.sort(g);case"lessons":return e.sort(v)}}),Object(c.a)(Object(r.default)(a),"onFilterByTitle",function(){var e=a.state,t=e.templates,l=e.titleFilter;return t.reduce(function(e,t){return-1!==t.title.replace(/\s/g,"").toLowerCase().indexOf(l)&&-1===e.indexOf(t)&&e.push(t),e},[])}),Object(c.a)(Object(r.default)(a),"onFilterTemplates",function(){var e=a.state,t=e.subjectFilters,l=e.sourceFilters,n=e.templates;return t.length&&-1===t.indexOf("all")&&(n=n.filter(function(e){return-1!==t.indexOf(e.subject)})),l.length&&(n=n.filter(function(e){return-1!==l.indexOf(e.source)})),n}),Object(c.a)(Object(r.default)(a),"getMappableTemplates",function(){var e=a.state,t=e.subjectFilters,l=e.sourceFilters,n=e.titleFilter,i=e.sort,s=e.templates;return n.length&&(s=a.onFilterByTitle()),(t.length||l.length)&&(s=a.onFilterTemplates()),i?a.onSortTemplates(s):s}),Object(c.a)(Object(r.default)(a),"importTemplateFromFile",function(){console.warn("stubbed out import function")}),Object(c.a)(Object(r.default)(a),"handleFilterClick",function(e,t){var l,n,i,s=a.state,r=s.subjectFilters,o=s.sourceFilters;switch(e){case"subject":l=r,n="subjectFilters";break;case"source":l=o,n="sourceFilters"}if(-1===l.indexOf(t))i=p()(l,{$push:[t]});else{var u=l.indexOf(t);i=p()(l,{$splice:[[u,1]]})}a.setState(Object(c.a)({},n,i))}),Object(c.a)(Object(r.default)(a),"mapTemplateCards",function(){return a.getMappableTemplates().map(function(e,t){return m.a.createElement(j,{template:e,index:t,dropdownIndex:a.state.dropdownIndex,dropdownIsOpen:a.state.dropdownIsOpen,onCloseDropdown:a.onCloseDropdown,onSetDropdown:a.onSetDropdown,onToggleEditModal:a.onToggleEditModal})})}),a.state={templates:w,dropdownIsOpen:!1,dropdownIndex:null,editModalOpen:!1,subjectFilters:[],sourceFilters:[],titleFilter:"",sort:""},a}return Object(o.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=this.state,t=e.subjectFilters,a=e.sourceFilters;return m.a.createElement("main",{id:"main",role:"main"},m.a.createElement("div",{className:"main-holder grey lighten-5 switcher-section"},m.a.createElement("div",{className:"title-row card-panel"},m.a.createElement("div",{className:"mobile-header"},m.a.createElement("a",{href:"#","data-target":"slide-out",className:"sidenav-trigger"},m.a.createElement("i",{className:"material-icons"},"menu"))),m.a.createElement("h2",{className:"h1 white-text"},m.a.createElement("span",{className:"heading-holder"},m.a.createElement("i",{className:"icon-module"}),m.a.createElement("span",{className:"heading-block"},"Course Template Library")))),m.a.createElement(N,{subjectFilters:t,sourceFilters:a,onSetSort:this.onSetSort,onClearFilters:this.onClearFilters,handleFilterClick:this.handleFilterClick,onSetFilteredState:this.onSetFilteredState,onUnsetFilteredState:this.onUnsetFilteredState}),m.a.createElement("div",{className:"content-section"},m.a.createElement("div",{className:"container-middle"},m.a.createElement("div",{className:"result-row center-align"},m.a.createElement("b",{className:"result"},"- ",this.getMappableTemplates().length," matches -")),m.a.createElement("div",{className:"d-flex-content row card-width-470"},this.mapTemplateCards())))),m.a.createElement("div",{className:"add-btn-block"},m.a.createElement("a",{href:"#",onClick:this.importTemplateFromFile,className:"waves-effect waves-teal btn add-btn"},m.a.createElement("i",{className:"material-icons"},"add")," Import Template from File")))}}]),t}(m.a.Component);t.default=F}},[["yU8R","5d41","9da1"]]]);