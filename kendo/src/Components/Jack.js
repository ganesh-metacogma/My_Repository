import React, { Fragment } from "react";
import "./../style/jack.css";
class Jack extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <span id="Create_a_Study">Create a Study</span>
          <div>
            <svg class="Ellipse_1">
              <ellipse
                fill="rgba(107,178,227,1)"
                stroke="rgba(107,178,227,1)"
                stroke-width="1px"
                stroke-linejoin="miter"
                stroke-linecap="butt"
                stroke-miterlimit="4"
                shape-rendering="auto"
                id="Ellipse_1"
                rx="22"
                ry="22"
                cx="22"
                cy="22"
              ></ellipse>
            </svg>
            <svg class="Ellipse_2">
              <ellipse
                fill="rgba(142,135,135,1)"
                stroke="rgba(142,135,135,1)"
                stroke-width="1px"
                stroke-linejoin="miter"
                stroke-linecap="butt"
                stroke-miterlimit="4"
                shape-rendering="auto"
                id="Ellipse_2"
                rx="22"
                ry="22"
                cx="22"
                cy="22"
              ></ellipse>
            </svg>
            <svg class="Ellipse_3">
              <ellipse
                fill="rgba(142,135,135,1)"
                stroke="rgba(142,135,135,1)"
                stroke-width="1px"
                stroke-linejoin="miter"
                stroke-linecap="butt"
                stroke-miterlimit="4"
                shape-rendering="auto"
                id="Ellipse_3"
                rx="22"
                ry="22"
                cx="22"
                cy="22"
              ></ellipse>
            </svg>
          </div>

          <div>
            <span id="ID_1">1</span>

            <span id="ID_2">2</span>

            <span id="ID_3">3</span>
          </div>
        </div>

        <svg className="Line_6" viewBox="0 0 182 3">
          <path
            fill="transparent"
            stroke="rgba(5,63,104,1)"
            stroke-width="3px"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_6"
            d="M 0 0 L 182 0"
          ></path>
        </svg>

        <svg className="Line_7" viewBox="0 0 180 3">
          <path
            fill="transparent"
            stroke="rgba(5,63,104,1)"
            stroke-width="3px"
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_7"
            d="M 0 0 L 180 0"
          ></path>
        </svg>

        <div id="Protocol_ID">
          <span>Protocol ID</span>

          <br />
          <input type="text" name="protocol_id" />
        </div>

        <div id="Indication">
          <span>Indication</span>

          <br />
          <select>
            <option>Select</option>
          </select>
        </div>

        <div id="Theropeutic_Area">
          <span>Theropeutic Area</span>

          <br />
          <select>
            <option>Select</option>
          </select>
        </div>

        <div id="Compound">
          <span>Compound</span>

          <br />
          <input type="text" name="compound" />
        </div>

        <div id="part">
          <div id="Phase">
            <span>Phase</span>

            <br />
            <select className="Phase">
              <option>Select</option>
            </select>
          </div>

          <div id="Study_type">
            <span>Study Type</span>

            <br />
            <select className="Study_type">
              <option>Select</option>
            </select>
          </div>
        </div>

        <div id="part1">
          <button id="cancel">Cancel</button>
          <button id="continue">Continue</button>
        </div>
      </Fragment>
    );
  }
}

export default Jack;
