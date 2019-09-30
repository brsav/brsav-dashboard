/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      establishmentType: '',
      establishmentName: '',
      error: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        establishmentType: '',
        establishmentName: '',
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  valid(target) {
    switch (target.name) {
      case 'firstName':
        const firstName = this.state.firstName
        if (firstName.length <= 100 && firstName.length >= 2) {
          this.setState({ error: { ...this.state.error, firstName: '' } })
        } else {
          this.setState({ error: { ...this.state.error, firstName: true } })
        }
        break;
      case 'lastName':
        const lastName = this.state.lastName
        if (lastName.length <= 100 && lastName.length >= 2) {
          this.setState({ error: { ...this.state.error, lastName: '' } })
        } else {
          this.setState({ error: { ...this.state.error, lastName: true } })
        }
        break;
      case 'email':
        var re = /\S+@\S+\.\S+/;
        if (re.test(this.state.email)) {
          this.setState({ error: { ...this.state.error, email: '' } })
        } else {
          this.setState({ error: { ...this.state.error, email: true } })
        }
        break;
      case 'password':
        const password = this.state.password
        if (password.length <= 30 && password.length >= 4) {
          this.setState({ error: { ...this.state.error, password: '' } })
        } else {
          this.setState({ error: { ...this.state.error, password: true } })
        }
        break;
      case 'phone':
        const phone = this.state.phone
        if (phone.length <= 11 && phone.length >= 10) {
          this.setState({ error: { ...this.state.error, phone: '' } })
        } else {
          this.setState({ error: { ...this.state.error, phone: true } })
        }
        break;
      case 'establishmentType':
        if (target.value === 'Tipo de estabelecimento') {
          this.setState({ error: { ...this.state.error, establishmentType: true } })
        } else {
          this.setState({ error: { ...this.state.error, establishmentType: '' } })
        }
        break;
      case 'establishmentName':
        const establishmentName = this.state.establishmentName
        if (establishmentName.length <= 100 && establishmentName.length >= 2) {
          this.setState({ error: { ...this.state.error, establishmentName: '' } })
        } else {
          this.setState({ error: { ...this.state.error, establishmentName: true } })
        }
        break;
      default:
        //ferrou
        break;
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value.trim() });
    this.valid(event.target)
  }

  handleSubmit(event) {
    console.log("error", this.state.error)
    console.log("this.state ", this.state)
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='firstName' placeholder="Primeiro nome" type="text" value={this.state.firstName} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.firstName ? <p style={{ color: 'red' }}>O nome deve ter 2 a 100 caracters.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='lastName' placeholder="Ultimo nome" type="text" value={this.state.lastName} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.lastName ? <p style={{ color: 'red' }}>O nome deve ter 2 a 100 caracters.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='email' placeholder="Email" type="email" value={this.state.email} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.email ? <p style={{ color: 'red' }}>Email inválido.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='password' placeholder="Senha" type="password" value={this.state.password} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.password ? <p style={{ color: 'red' }}>Senha deve conter 4 a 30 caracters.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='phone' placeholder="Telefone" type="text" value={this.state.phone} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.phone ? <p style={{ color: 'red' }}>Telefone inválido.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <Input type="select" name="establishmentType" id="exampleSelect" value={this.state.establishmentType} onChange={this.handleChange}>
                    <option>Tipo de estabelecimento</option>
                    <option>Casa</option>
                    <option>Mercado</option>
                    <option>Padaria</option>
                    <option>Mercearia</option>
                    <option>Atacado</option>
                  </Input>
                  {this.state.error.establishmentType ? <p style={{ color: 'red' }}>Seleciona o um tipo.</p> : <p></p>}
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input name='establishmentName' placeholder="Nome do estabelecimento" type="text" value={this.state.establishmentName} onChange={this.handleChange} />
                  </InputGroup>
                  {this.state.error.establishmentName ? <p style={{ color: 'red' }}>Por favor seleciona uma opção.</p> : <p></p>}
                </FormGroup>
                <div className="text-center">
                  <Button onClick={this.handleSubmit} className="mt-4" color="primary" type="button">Registrar</Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Register;
