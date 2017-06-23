var switchModule = (name) => {

    ReactDOM.unmountComponentAtNode(document.getElementById('content-box-container'));
    var module = null;
    switch (name) {
        case 'Investment':
            module = React.createElement(Investment);
            break;
    
        default:
            break;
    }
    
    ReactDOM.render(module, document.getElementById("content-box-container"));
}