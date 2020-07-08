import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      colMain: "",
      colAdditional: "",
      fields: [],
      inputName: {},
      inputPhone: {},
      inputEmail: {},
      inputDate: {},
      inputText: {},
      inputCheckbox: {},
    };
  }

  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/alexandrov-va/7f353ca822d074d7ce22d3af3d13696f/raw/0907091de6fedf6153cdb718f32a4215dc2c53cf/page.json"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.form.title,
          colMain: data.form.field_groups.main,
          colAdditional: data.form.field_groups.additional,
          fields: data.form.fields,
          inputName: data.form.fields[0],
          inputPhone: data.form.fields[1],
          inputEmail: data.form.fields[2],
          inputDate: data.form.fields[3],
          inputText: data.form.fields[4],
          inputCheckbox: data.form.fields[5],
        });
      })
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <div className="form">
        <header>
          <h1>{this.state.title}</h1>
        </header>
        <div className="row">
          <div className={this.state.colMain}>
            <div className="flex-block">
              <div className="name-block">
                <label htmlFor={this.state.inputName.name}>
                  {this.state.inputName.label}
                </label>
                <input
                  className={this.state.inputName.name}
                  id={this.state.inputName.name}
                  type={this.state.inputName.type}
                ></input>
              </div>

              <div className="tel-block">
                <label htmlFor={this.state.inputPhone.name}>
                  {this.state.inputPhone.label}
                </label>
                <input
                  className={this.state.inputPhone.name}
                  id={this.state.inputPhone.name}
                  type={this.state.inputPhone.type}
                ></input>
              </div>
            </div>

            <div className="flex-block">
              <div className="email-block">
                <label htmlFor={this.state.inputEmail.name}>
                  {this.state.inputEmail.label}
                </label>
                <input
                  className={this.state.inputEmail.name}
                  id={this.state.inputEmail.name}
                  type={this.state.inputEmail.type}
                ></input>
              </div>

              <div className="date-block">
                <label htmlFor={this.state.inputDate.name}>
                  {this.state.inputDate.label}
                </label>
                <input
                  className={this.state.inputDate.name}
                  id={this.state.inputDate.name}
                  type={this.state.inputDate.type}
                ></input>
              </div>
            </div>
          </div>

          <div className={this.state.colAdditional}>
            <div className="textarea-block">
              <label htmlFor={this.state.inputText.group}>
                {this.state.inputText.label}
              </label>
              <textarea
                id={this.state.inputText.group}
                className={this.state.inputText.name}
                cols="10"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div>
            <div className="checkbox-block">
              <input type="checkbox" defaultChecked></input>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.inputCheckbox.label,
                }}
                className="checkbox-block-text"
              ></div>
            </div>
            <div className={this.state.colMain}>
              <div className="submitBtn">
                <button>Отправить заявку</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
