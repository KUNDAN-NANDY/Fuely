import React, {Component} from "react";
import axios from "axios";
import Container from '@material-ui/core/Container';


class IpAddress extends Component {
    constructor() {
        super();

        this.state = {
            ip: "",
            regionName: "",
            country: "",

            loading: false,
        };
    }

    componentDidMount = () => {
        this.getIpInfo();
    };


    getIpInfo = () => {
        let self = this;
        self.setState({
            loading: true,
        });

        axios.get("http://ip-api.com/json").then(response => {
            let data = response.data || {};
            self.setState({
                ip: data.query || "",
                regionName: data.regionName || "",
                country: data.country || "",
                loading: false,
            });


        }).catch((err) => {
            self.setState({
                loading: false,
            });
        });
    };
    
    render = () => {
        let self = this;
        if (self.state.loading) {
            return (
              <Container>
                <div className="location">
                    <h1>Loading IP Address</h1>
                  </div>
              </Container>
            );
        } else {
            return (
              <Container>
                <div className="location">
                    <div class="row">
                      <div class="col">      1 of 3
                      </div> 
                      <div class="col">
                        2 of 3
                      </div>
                      <div class="col">      {self.state.regionName}
                      </div>
                    </div>
                </div>
              </Container>
            );
        }

    };
}

export default IpAddress;