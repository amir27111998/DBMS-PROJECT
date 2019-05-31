import React from 'react';
import '../loadingFiles';

const DashBoard=()=>{
    return(
      
      <div className="wrapper ">
    <div className="main-panel" id="main-panel">
     
      <nav className="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">Dashboard</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
       
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#pablo">
                  <i className="now-ui-icons media-2_sound-wave"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Stats</span>
                  </p>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="now-ui-icons location_world"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Some Actions</span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pablo">
                  <i className="now-ui-icons users_single-02"></i>
                  <p>
                    <span className="d-lg-none d-md-block">Account</span>
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      <div className="panel-header panel-header-lg">
        <canvas id="bigDashboardChart"></canvas>
      </div>
      <div className="content">
        <div className="row">
          <div className="col-lg-4">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Global Sales</h5>
                <h4 className="card-title">Shipped Products</h4>
                {/* <div className="dropdown">
                  <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i className="now-ui-icons loader_gear"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div> */}
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="lineChartExample"></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">2018 Sales</h5>
                <h4 className="card-title">All products</h4>
                <div className="dropdown">
                  <button type="button" className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret" data-toggle="dropdown">
                    <i className="now-ui-icons loader_gear"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <a className="dropdown-item text-danger" href="#">Remove Data</a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons arrows-1_refresh-69"></i> Just Updated
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card card-chart">
              <div className="card-header">
                <h5 className="card-category">Email Statistics</h5>
                <h4 className="card-title">24 Hours Performance</h4>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="barChartSimpleGradientsNumbers"></canvas>
                </div>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="now-ui-icons ui-2_time-alarm"></i> Last 7 days
                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-category">All Persons List</h5>
                <h4 className="card-title"> Employees Stats</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table">
                    <thead className=" text-primary">
                      <th>
                        Name
                      </th>
                      <th>
                        Country
                      </th>
                      <th>
                        City
                      </th>
                      <th className="text-right">
                        Salary
                      </th>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Dakota Rice
                        </td>
                        <td>
                          Niger
                        </td>
                        <td>
                          Oud-Turnhout
                        </td>
                        <td className="text-right">
                          $36,738
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Minerva Hooper
                        </td>
                        <td>
                          Curaçao
                        </td>
                        <td>
                          Sinaai-Waas
                        </td>
                        <td className="text-right">
                          $23,789
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Sage Rodriguez
                        </td>
                        <td>
                          Netherlands
                        </td>
                        <td>
                          Baileux
                        </td>
                        <td className="text-right">
                          $56,142
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Doris Greene
                        </td>
                        <td>
                          Malawi
                        </td>
                        <td>
                          Feldkirchen in Kärnten
                        </td>
                        <td className="text-right">
                          $63,542
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Mason Porter
                        </td>
                        <td>
                          Chile
                        </td>
                        <td>
                          Gloucester
                        </td>
                        <td className="text-right">
                          $78,615
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

);
};

export default DashBoard;