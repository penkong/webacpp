webpackJsonp([1,5],{1517:function(e,t,l){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),o=l(2),s=n(o),f=l(11),m=l(40),d=l(76),p=a(d),E=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"componentWillMount",value:function(){this.props.findArtist(this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){e.params.id!==this.props.params.id&&this.props.findArtist(e.params.id)}},{key:"componentWillUnmount",value:function(){this.props.resetArtist()}},{key:"onDeleteClick",value:function(){this.props.deleteArtist(this.props.params.id)}},{key:"renderAlbums",value:function(){var e=this.props.artist.albums;if(e&&e.map)return e.map(function(e){return s.default.createElement("div",{className:"card album",key:e.title},s.default.createElement("div",{className:"card-image"},s.default.createElement("img",{src:e.image}),s.default.createElement("span",{className:"card-title"},s.default.createElement("h4",null,e.title))),s.default.createElement("div",{className:"card-content"},s.default.createElement("div",null,s.default.createElement("h5",null,e.copiesSold),s.default.createElement("i",null,"copies sold")),s.default.createElement("div",null,s.default.createElement("h5",null,e.numberTracks),s.default.createElement("i",null,"tracks"))))})}},{key:"render",value:function(){if(!this.props.artist)return s.default.createElement("div",null,'Todo: implement "FindArtist" query');var e=this.props.artist,t=e.name,l=e.age,a=e.genre,n=e.image,r=e.yearsActive,i=e.netWorth,u=e.labelName,c=e._id;return s.default.createElement("div",null,s.default.createElement("div",{className:"spacer"},s.default.createElement(m.Link,{to:"/"},"Back"),s.default.createElement(m.Link,{to:"/artists/"+c+"/edit"},"Edit"),s.default.createElement("a",{onClick:this.onDeleteClick.bind(this)},"Delete")),s.default.createElement("ul",{className:"collection artist-detail"},s.default.createElement("li",{className:"collection-item header"},s.default.createElement("div",null,s.default.createElement("h3",null,t),s.default.createElement("h5",null,"Master of ",a)),s.default.createElement("image",{src:n,className:"right"})),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h5",null,r),s.default.createElement("p",null,s.default.createElement("i",null,"Years Active"))),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h5",null,l),s.default.createElement("p",null,s.default.createElement("i",null,"Years Old"))),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h5",null,"$",i),s.default.createElement("p",null,s.default.createElement("i",null,"Net Worth"))),s.default.createElement("li",{className:"collection-item"},s.default.createElement("h5",null,u),s.default.createElement("p",null,s.default.createElement("i",null,"Label"))),s.default.createElement("li",{className:"flex wrap"},this.renderAlbums())))}}]),t}(o.Component),h=function(e){var t=e.artists;return{artist:t.artist}};t.default=(0,f.connect)(h,p)(E)}});