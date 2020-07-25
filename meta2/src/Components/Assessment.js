import React, { Fragment } from "react";
import { Layout, Button, Checkbox } from "antd";

const { Content } = Layout;

class Assessment extends React.Component {
  render() {
    return (
      <Fragment>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <h5>
            For each assessment check all the timepoints when it should be
            performed.Assessment requiring blood draws must specify the volume
            of blood needed.For more option click a cell's corner.(appears on
            mouse hover)
          </h5>

          <div className="mt-5">
            <ul>
              <li className="pt-3">
                <Checkbox>
                  <span>Will perform assessment at this point</span>
                </Checkbox>
              </li>

              <li className="pt-3">
                <Checkbox>
                  <span>Visit or assessment has footnote</span>
                </Checkbox>
              </li>
              <li className="pt-3">
                <Checkbox>
                  <span>
                    Will take blood at this point; shows sample volume
                  </span>
                </Checkbox>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-around pt-5">
            <button class="btn btn-warning">+/- Assessment</button>
            <button class="btn btn-warning">Import Assessment</button>
            <button class="btn btn-warning">Preview Blood Log</button>
            <button class="btn btn-warning">Import full Schedule</button>
            <button class="btn btn-warning">Timelines</button>
            <button class="btn btn-warning">Settings</button>
          </div>
        </Content>
      </Fragment>
    );
  }
}

export default Assessment;
