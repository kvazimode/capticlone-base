import React from 'react'
import Tab from './tab.jsx'

class Tabs extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            tab: `params`
        }

        this.handleTabSelect = this.handleTabSelect.bind(this)
    }

    handleTabSelect(tab) {
        this.setState({tab: tab})
    }

    render() {
        return (
            <div className="panel-tabs">
                <button className="params" onClick={(e) => (this.handleTabSelect(e.target.className))}>Параметры</button>
                <button className="library" onClick={(e) => (this.handleTabSelect(e.target.className))}>Библиотека</button>
                <Tab tab={this.state.tab} imgList={this.props.imgList} bgList={this.props.bgList} />
            </div>
        )
    }
}

export default Tabs
