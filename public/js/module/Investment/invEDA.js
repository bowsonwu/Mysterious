class InvEDA extends React.Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({ stockId: event.target.value });
    }

    handleSearch() {
        $.get('/api/exDividend/' + this.sate.stockId, function (data) { console.log(data) });
    }

    render() {
        return React.createElement('div', null,
            React.createElement('div', { className: 'col-md-4' },
                React.createElement('div', { className: 'input-group' },
                    React.createElement('input', { className: 'form-control', onChange: this.handleChange }),
                    React.createElement('span', { className: 'input-group-btn' },
                        React.createElement('button', { className: 'btn btn-outline-primary', onClick: this.handleSearch }, 'Search')
                    )
                )
            )
        )
    }
}

