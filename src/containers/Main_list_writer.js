import React from 'react';
import Writer from './Writer';
import MultiplePage from './Multiple_page';
export default class MainListWriter extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row">
              <Writer />
            </div>
            <MultiplePage />
          </div>
        </section>
      </div>
    );
  }
}
