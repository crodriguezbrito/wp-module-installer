/**
 * Styles.
 */
import './styles/app.scss';

/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { INSTALLER_DIV } from './constants';

// eslint-disable-next-line import/no-unresolved
import App from './components/App';

domReady( () => {
	renderModal( INSTALLER_DIV );
} );

/**
 * This function creates a modal that is rendered on the page.
 *
 * @param {string} elementId It takes an elementId as an argument and creates a div with the given elementId.
 */
const renderModal = ( elementId ) => {
	const modalRoot = document.createElement( 'div' );
	modalRoot.id = elementId;

	// Append the modal container to the body if it hasn't been added already.
	if ( ! document.getElementById( elementId ) ) {
		document.body.append( modalRoot );
	}
	// react render depending on wp version
	if ( 'undefined' !== typeof createRoot ) {
		createRoot( modalRoot ).render( <App /> ); // wp 6.2 and above
	}
};
