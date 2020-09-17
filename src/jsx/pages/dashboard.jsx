import React from "react";
import { Link } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import Footer2 from "../layout/footer2";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import DepthChart from "../charts/depth";
import RangeSlider from "../element/range-slider";
import "react-rangeslider/lib/index.css";

function Dashboard() {
  return (
    <>
      <Header2 />
      <Sidebar />

      <div class="content-body" id="dashboard">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-6 col-xxl-12 col-lg-12 col-xxl-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">BTC - USD Perpetual Swap</h4>
                  <span>
                    24h Change <strong class="text-success"> +5.30%</strong>
                  </span>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">24h Volume</p>
                      <h6>814,107.51 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Index Price</p>
                      <h6>10,326.19 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Mark Price</p>
                      <h6>10,343.94 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Last Price</p>
                      <h6>10,383.51 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Funding Rate</p>
                      <h6>0.1392%</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-xxl-12 col-lg-12 col-xxl-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Your Wallet</h4>
                  <span>
                    Update <span>10</span> minutes ago
                  </span>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Equity</p>
                      <h6>34.00 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Available Margin</p>
                      <h6>47.00 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Unrealized P&L</p>
                      <h6>92.00 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Position Margin</p>
                      <h6>58.00 USD</h6>
                    </div>
                    <div class="col-xl col-lg col-md col-sm-auto col-6">
                      <p class="mb-0">Active Orders</p>
                      <h6>15.00 USD</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-12 col-xxl-6">
              <Tab.Container defaultActiveKey="limit">
                <div class="card">
                  <div class="card-header">
                    <Nav variant="pills">
                      <Nav.Link eventKey="limit">Limit</Nav.Link>
                      <Nav.Link eventKey="market">Market</Nav.Link>
                      <Nav.Link eventKey="stop-limit">Stop Limit</Nav.Link>
                      <Nav.Link eventKey="stop-market">Stop Market</Nav.Link>
                    </Nav>
                  </div>
                  <div class="card-body market-limit">
                    <Tab.Content>
                      <Tab.Pane eventKey="limit">
                        <form
                          method="post"
                          name="myform"
                          class="currency_limit"
                        >
                          <div class="form-group">
                            {/* <!-- <label class="mr-sm-2">Currency</label> --> */}
                            <div class="input-group mb-3">
                              <select
                                name="currency"
                                class="form-control mw-150"
                              >
                                <option data-display="Bitcoin" value="bitcoin">
                                  Bitcoin
                                </option>
                                <option value="litecoin">Litecoin</option>
                              </select>
                              <input
                                type="text"
                                name="usd_amount"
                                class="form-control text-right"
                                placeholder="Enter Size"
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">USD</span>
                              </div>
                              <input
                                type="text"
                                name="currency_amount"
                                class="form-control text-right"
                                placeholder="501458"
                              />
                            </div>
                          </div>

                          <ul class="list-group limit-nested">
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Time In Force
                              <select name="currency" class="border-0 h-0">
                                <option
                                  data-display="Good 'Til Cancelled"
                                  value=""
                                >
                                  Good 'Til Cancelled
                                </option>
                                <option value="">Fill Or Kill</option>
                                <option value="">Immediate Or Cancel</option>
                              </select>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Post Only
                              <label class="toggle mb-0">
                                <input
                                  class="toggle-checkbox"
                                  type="checkbox"
                                  defaultChecked={true}
                                />
                                <span class="toggle-switch"></span>
                              </label>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Size in BTC
                              <strong class="strong"> 0.00254 BTC</strong>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Order Value
                              <strong class="strong">65850 USD</strong>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Available Margin
                              <strong class="strong">15458 USD</strong>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Buy Cost @ 1.0x
                              <strong class="strong">0.00 USD</strong>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Sell Cost @ 1.0x
                              <strong class="strong">0.00 USD</strong>
                            </li>
                          </ul>

                          <div class="btn-group btn-block mt-3">
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-success"
                            >
                              Buy Now
                            </button>
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-danger"
                            >
                              Sell Now
                            </button>
                          </div>
                        </form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="market">
                        <form
                          method="post"
                          name="myform"
                          class="currency_limit"
                        >
                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">USD</span>
                              </div>
                              <input
                                type="text"
                                name="currency_amount"
                                class="form-control text-right"
                                placeholder="501458"
                              />
                            </div>
                          </div>

                          <ul class="list-group market-nested">
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Size in BTC
                              <span class="strong"> 0.00254 BTC</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Order Value
                              <span class="strong">65850 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Available Margin
                              <span class="strong">15458 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Buy Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Sell Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                          </ul>

                          <div class="btn-group btn-block mt-3">
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-success"
                            >
                              Buy Now
                            </button>
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-danger"
                            >
                              Sell Now
                            </button>
                          </div>
                        </form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="stop-limit">
                        <form
                          method="post"
                          name="myform"
                          class="currency_limit"
                        >
                          <div class="form-group">
                            {/* <!-- <label class="mr-sm-2">Currency</label> --> */}
                            <div class="input-group mb-3">
                              <select
                                name="currency"
                                class="form-control mw-150"
                              >
                                <option data-display="Bitcoin" value="bitcoin">
                                  Bitcoin
                                </option>
                                <option value="litecoin">Litecoin</option>
                              </select>
                              <input
                                type="text"
                                name="usd_amount"
                                class="form-control text-right"
                                placeholder="Enter Size"
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">USD</span>
                              </div>
                              <input
                                type="text"
                                name="currency_amount"
                                class="form-control text-right"
                                placeholder="501458"
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">USD</span>
                              </div>
                              <input
                                type="text"
                                name="currency_amount"
                                class="form-control text-right"
                                placeholder="501458"
                              />
                            </div>
                          </div>

                          <ul class="list-group stop-limit-nested">
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Stop Trigger
                              <select name="currency" class="border-0 h-0">
                                <option data-display="Mark Price" value="">
                                  Mark Price
                                </option>
                                <option value="">Last Price</option>
                              </select>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Time In Force
                              <select name="currency" class="border-0 h-0">
                                <option
                                  data-display="Good 'Til Cancelled"
                                  value=""
                                >
                                  Good 'Til Cancelled
                                </option>
                                <option value="">Fill Or Kill</option>
                                <option value="">Immediate Or Cancel</option>
                              </select>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Post Only
                              <label class="toggle mb-0">
                                <input
                                  class="toggle-checkbox"
                                  type="checkbox"
                                  checked
                                />
                                <span class="toggle-switch"></span>
                              </label>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Size in BTC
                              <span class="strong"> 0.00254 BTC</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Order Value
                              <span class="strong">65850 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Available Margin
                              <span class="strong">15458 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Buy Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Sell Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                          </ul>

                          <div class="btn-group btn-block mt-3">
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-success"
                            >
                              Buy Now
                            </button>
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-danger"
                            >
                              Sell Now
                            </button>
                          </div>
                        </form>
                      </Tab.Pane>
                      <Tab.Pane eventKey="stop-market">
                        <form
                          method="post"
                          name="myform"
                          class="currency_limit"
                        >
                          <div class="form-group">
                            {/* <!-- <label class="mr-sm-2">Currency</label> --> */}
                            <div class="input-group mb-3">
                              <select
                                name="currency"
                                class="form-control mw-150"
                              >
                                <option data-display="Bitcoin" value="bitcoin">
                                  Bitcoin
                                </option>
                                <option value="litecoin">Litecoin</option>
                              </select>
                              <input
                                type="text"
                                name="usd_amount"
                                class="form-control text-right"
                                placeholder="Enter Size"
                              />
                            </div>
                          </div>

                          <div class="form-group">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">USD</span>
                              </div>
                              <input
                                type="text"
                                name="currency_amount"
                                class="form-control text-right"
                                placeholder="501458"
                              />
                            </div>
                          </div>

                          <ul class="list-group stop-market-nested">
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Stop Trigger
                              <select name="currency" class="border-0 h-0">
                                <option data-display="Mark Price" value="">
                                  Mark Price
                                </option>
                                <option value="">Last Price</option>
                              </select>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Post Only
                              <label class="toggle mb-0">
                                <input
                                  class="toggle-checkbox"
                                  type="checkbox"
                                  checked
                                />
                                <span class="toggle-switch"></span>
                              </label>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Size in BTC
                              <span class="strong"> 0.00254 BTC</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Order Value
                              <span class="strong">65850 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Available Margin
                              <span class="strong">15458 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Buy Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                            <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Sell Cost @ 1.0x
                              <span class="strong">0.00 USD</span>
                            </li>
                          </ul>

                          <div class="btn-group btn-block mt-3">
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-success"
                            >
                              Buy Now
                            </button>
                            <button
                              type="submit"
                              name="submit"
                              class="btn btn-danger"
                            >
                              Sell Now
                            </button>
                          </div>
                        </form>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>

            <div class="col-xl-5 col-lg-6 col-md-12 col-xxl-6">
              {/* <!-- TradingView Widget BEGIN --> */}
              <div
                class="tradingview-widget-container card"
                style={{ height: "460px" }}
              >
                <TradingViewWidget
                  symbol="NASDAQ:AAPL"
                  theme={Themes.DARK}
                  locale="fr"
                  autosize
                />
              </div>
              {/* <!-- TradingView Widget END --> */}
            </div>

            <div class="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Order Book</h4>
                </div>
                <PerfectScrollbar>
                  <div class="card-body order-book">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Price (USD)</th>
                          <th scope="col">Price (BTC)</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-danger">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-danger">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-danger">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-danger">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-danger">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="order-book-divider">
                      <h6 class="text-danger">
                        {" "}
                        <i class="la la-arrow-down"></i> 6587.35
                      </h6>
                      <span>6520.220 / 4835.00</span>
                    </div>

                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Price (USD)</th>
                          <th scope="col">Price (BTC)</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="text-success">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-success">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-success">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-success">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                        <tr>
                          <td class="text-success">10393.50</td>
                          <td>0.010</td>
                          <td>14.109</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>

            <div class="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Trade History</h4>
                    </div>
                    <PerfectScrollbar>
                      <div class="card-body trade-history">
                        <div class="table-responsive">
                          <table class="table table-borderless">
                            <thead>
                              <tr>
                                <th scope="col">Price</th>
                                <th scope="col">Size</th>
                                <th scope="col">Time</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                              <tr>
                                <td class="text-danger">10393.50</td>
                                <td>0.010</td>
                                <td>14.109</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-md-12 col-xxl-4">
              <Tab.Container defaultActiveKey="STAR">
                <div class="card">
                  <div class="card-header">
                    <Nav variant="pills">
                      <Nav.Link eventKey="STAR">
                        <i class="mdi mdi-star"></i>
                      </Nav.Link>
                      <Nav.Link eventKey="BTC">BTC</Nav.Link>
                      <Nav.Link eventKey="ETH">ETH</Nav.Link>
                      <Nav.Link eventKey="NEO">NEO</Nav.Link>
                      <Nav.Link eventKey="USDT">USDT</Nav.Link>
                      <Nav.Link eventKey="DAI">DAI</Nav.Link>
                    </Nav>
                  </div>
                  <PerfectScrollbar>
                    <div class="card-body  price-pair">
                      <Tab.Content>
                        <Tab.Pane eventKey="STAR">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ETH/BTC
                                </td>
                                <td>0.00020255</td>
                                <td class="red">-2.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/BTC
                                </td>
                                <td>0.00013192</td>
                                <td class="green">+5.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/BTC
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-1.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/BTC
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="BTC">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ETH/BTC
                                </td>
                                <td>0.00020255</td>
                                <td class="red">-2.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/BTC
                                </td>
                                <td>0.00013192</td>
                                <td class="green">+5.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/BTC
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-1.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/BTC
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> EOS/BTC
                                </td>
                                <td>0.00000103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTT/BTC
                                </td>
                                <td>0.00002303</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> LTC/BTC
                                </td>
                                <td>0.03520103</td>
                                <td class="green">+1.5%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRX/BTC
                                </td>
                                <td>0.00330103</td>
                                <td class="red">-3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BSV/BTC
                                </td>
                                <td>0.00300103</td>
                                <td class="green">+2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> COTI/BTC
                                </td>
                                <td>0.003500103</td>
                                <td class="green">+2.85%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XYT/BTC
                                </td>
                                <td>0.00003103</td>
                                <td class="green">+3.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BNB/BTC
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XMR/BTC
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRY/BTC
                                </td>
                                <td>0.00000123</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ADA/BTC
                                </td>
                                <td>0.00050103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> NEO/BTC
                                </td>
                                <td>0.00340103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XLM/BTC
                                </td>
                                <td>0.00035103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ENQ/BTC
                                </td>
                                <td>0.00354103</td>
                                <td class="green">+2.02%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AVA/BTC
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AMB/BTC
                                </td>
                                <td>0.05335103</td>
                                <td class="green">+1.0%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> MAP/BTC
                                </td>
                                <td>0.00234103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GO/BTC
                                </td>
                                <td>0.00354103</td>
                                <td class="red">-6.50%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KICK/BTC
                                </td>
                                <td>0.02053103</td>
                                <td class="red">-6.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DBC/BTC
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+7.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GGC/BTC
                                </td>
                                <td>0.00353103</td>
                                <td class="red">-4.05%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ETH">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTC/ETH
                                </td>
                                <td>0.00020255</td>
                                <td class="green">+1.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/ETH
                                </td>
                                <td>0.00013192</td>
                                <td class="red">-0.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/ETH
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-0.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/ETH
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> EOS/ETH
                                </td>
                                <td>0.00000103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTT/ETH
                                </td>
                                <td>0.00002303</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> LTC/ETH
                                </td>
                                <td>0.03520103</td>
                                <td class="green">+1.5%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRX/ETH
                                </td>
                                <td>0.00330103</td>
                                <td class="red">-3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BSV/ETH
                                </td>
                                <td>0.00300103</td>
                                <td class="green">+2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> COTI/ETH
                                </td>
                                <td>0.003500103</td>
                                <td class="green">+2.85%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XYT/ETH
                                </td>
                                <td>0.00003103</td>
                                <td class="green">+3.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BNB/ETH
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XMR/ETH
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRY/ETH
                                </td>
                                <td>0.00000123</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ADA/ETH
                                </td>
                                <td>0.00050103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> NEO/ETH
                                </td>
                                <td>0.00340103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XLM/ETH
                                </td>
                                <td>0.00035103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ENQ/ETH
                                </td>
                                <td>0.00354103</td>
                                <td class="green">+2.02%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AVA/ETH
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AMB/ETH
                                </td>
                                <td>0.05335103</td>
                                <td class="green">+1.0%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> MAP/ETH
                                </td>
                                <td>0.00234103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GO/ETH
                                </td>
                                <td>0.00354103</td>
                                <td class="red">-6.50%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KICK/ETH
                                </td>
                                <td>0.02053103</td>
                                <td class="red">-6.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DBC/ETH
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+7.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GGC/ETH
                                </td>
                                <td>0.00353103</td>
                                <td class="red">-4.05%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="NEO">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ETH/NEO
                                </td>
                                <td>0.00350255</td>
                                <td class="red">-6.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/NEO
                                </td>
                                <td>0.00013192</td>
                                <td class="green">+0.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/NEO
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-0.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/NEO
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> EOS/NEO
                                </td>
                                <td>0.00000103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTT/NEO
                                </td>
                                <td>0.00002303</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> LTC/NEO
                                </td>
                                <td>0.03520103</td>
                                <td class="green">+1.5%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRX/NEO
                                </td>
                                <td>0.00330103</td>
                                <td class="red">-3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BSV/NEO
                                </td>
                                <td>0.00300103</td>
                                <td class="green">+2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> COTI/NEO
                                </td>
                                <td>0.003500103</td>
                                <td class="green">+2.85%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XYT/NEO
                                </td>
                                <td>0.00003103</td>
                                <td class="green">+3.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BNB/NEO
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XMR/NEO
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRY/NEO
                                </td>
                                <td>0.00000123</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ADA/NEO
                                </td>
                                <td>0.00050103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> NEO/NEO
                                </td>
                                <td>0.00340103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XLM/NEO
                                </td>
                                <td>0.00035103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ENQ/NEO
                                </td>
                                <td>0.00354103</td>
                                <td class="green">+2.02%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AVA/NEO
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AMB/NEO
                                </td>
                                <td>0.05335103</td>
                                <td class="green">+1.0%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> MAP/NEO
                                </td>
                                <td>0.00234103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GO/NEO
                                </td>
                                <td>0.00354103</td>
                                <td class="red">-6.50%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KICK/NEO
                                </td>
                                <td>0.02053103</td>
                                <td class="red">-6.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DBC/NEO
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+7.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GGC/NEO
                                </td>
                                <td>0.00353103</td>
                                <td class="red">-4.05%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="USDT">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ETH/USDT
                                </td>
                                <td>0.00350255</td>
                                <td class="red">-2.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/USDT
                                </td>
                                <td>0.00013192</td>
                                <td class="green">+6.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/USDT
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-0.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/USDT
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> EOS/USDT
                                </td>
                                <td>0.00000103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTT/USDT
                                </td>
                                <td>0.00002303</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> LTC/USDT
                                </td>
                                <td>0.03520103</td>
                                <td class="green">+1.5%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRX/USDT
                                </td>
                                <td>0.00330103</td>
                                <td class="red">-3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BSV/USDT
                                </td>
                                <td>0.00300103</td>
                                <td class="green">+2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> COTI/USDT
                                </td>
                                <td>0.003500103</td>
                                <td class="green">+2.85%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XYT/USDT
                                </td>
                                <td>0.00003103</td>
                                <td class="green">+3.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BNB/USDT
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XMR/USDT
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRY/USDT
                                </td>
                                <td>0.00000123</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ADA/USDT
                                </td>
                                <td>0.00050103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> USDT/USDT
                                </td>
                                <td>0.00340103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XLM/USDT
                                </td>
                                <td>0.00035103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ENQ/USDT
                                </td>
                                <td>0.00354103</td>
                                <td class="green">+2.02%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AVA/USDT
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AMB/USDT
                                </td>
                                <td>0.05335103</td>
                                <td class="green">+1.0%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> MAP/USDT
                                </td>
                                <td>0.00234103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GO/USDT
                                </td>
                                <td>0.00354103</td>
                                <td class="red">-6.50%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KICK/USDT
                                </td>
                                <td>0.02053103</td>
                                <td class="red">-6.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DBC/USDT
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+7.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GGC/USDT
                                </td>
                                <td>0.00353103</td>
                                <td class="red">-4.05%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                        <Tab.Pane eventKey="DAI">
                          <table class="table">
                            <thead>
                              <tr>
                                <th>Pairs</th>
                                <th>Last Price</th>
                                <th>Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ETH/DAI
                                </td>
                                <td>0.05320255</td>
                                <td class="green">+6.58%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KCS/DAI
                                </td>
                                <td>0.00013192</td>
                                <td class="green">+0.6%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XRP/DAI
                                </td>
                                <td>0.00002996</td>
                                <td class="red">-0.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> VET/DAI
                                </td>
                                <td>0.00000103</td>
                                <td class="green">+1.8%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> EOS/DAI
                                </td>
                                <td>0.00000103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BTT/DAI
                                </td>
                                <td>0.00002303</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> LTC/DAI
                                </td>
                                <td>0.03520103</td>
                                <td class="green">+1.5%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRX/DAI
                                </td>
                                <td>0.00330103</td>
                                <td class="red">-3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BSV/DAI
                                </td>
                                <td>0.00300103</td>
                                <td class="green">+2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> COTI/DAI
                                </td>
                                <td>0.003500103</td>
                                <td class="green">+2.85%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XYT/DAI
                                </td>
                                <td>0.00003103</td>
                                <td class="green">+3.55%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> BNB/DAI
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XMR/DAI
                                </td>
                                <td>0.003500103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> TRY/DAI
                                </td>
                                <td>0.00000123</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ADA/DAI
                                </td>
                                <td>0.00050103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DAI/DAI
                                </td>
                                <td>0.00340103</td>
                                <td class="red">-1.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> XLM/DAI
                                </td>
                                <td>0.00035103</td>
                                <td class="green">+5.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> ENQ/DAI
                                </td>
                                <td>0.00354103</td>
                                <td class="green">+2.02%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AVA/DAI
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+3.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> AMB/DAI
                                </td>
                                <td>0.05335103</td>
                                <td class="green">+1.0%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> MAP/DAI
                                </td>
                                <td>0.00234103</td>
                                <td class="red">-2.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GO/DAI
                                </td>
                                <td>0.00354103</td>
                                <td class="red">-6.50%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> KICK/DAI
                                </td>
                                <td>0.02053103</td>
                                <td class="red">-6.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> DBC/DAI
                                </td>
                                <td>0.02535103</td>
                                <td class="green">+7.05%</td>
                              </tr>
                              <tr>
                                <td>
                                  <i class="mdi mdi-star"></i> GGC/DAI
                                </td>
                                <td>0.00353103</td>
                                <td class="red">-4.05%</td>
                              </tr>
                            </tbody>
                          </table>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </PerfectScrollbar>
                </div>
              </Tab.Container>
            </div>

            <div class="col-xl-5 col-lg-8 col-md-12 col-xxl-8">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Depth Chart</h4>
                </div>
                <div class="card-body">
                  <DepthChart />
                </div>
              </div>
            </div>

            <div class="col-xl-2 col-lg-4 col-xxl-4">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Your Portfolio </h4>
                </div>
                <PerfectScrollbar>
                  <div class="card-body balance-widget">
                    <div class="total-balance">
                      <h3>$ 63411.00</h3>
                      <h6>Total Balance</h6>
                    </div>

                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Size</th>
                            <th>USD</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>BTC</td>
                            <td>0.000242</td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>LTC</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>XRP</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>ETH</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>XTZ</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>EOS</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>Dash</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                          <tr>
                            <td>USDT</td>
                            <td>0.000242 </td>
                            <td>0.125 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>

            <div class="col-xl-2 col-lg-6 col-md-6 col-xxl-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Market News</h4>
                </div>
                <PerfectScrollbar>
                  <div class="card-body market-news">
                    <div class="row">
                      <div class="col-xl-12">
                        <img
                          class="img-fluid"
                          src={require("./../../images/blog/1.jpg")}
                          alt="..."
                          height="100"
                        />
                        <Link to={"#"} class="news-content">
                          <h6 class="mt-2 mb-3">
                            The Cryptocurrency Act of 2020 Is ‘Dead on Arrival,’
                            Washington Tells Sponsors
                          </h6>
                        </Link>
                      </div>
                      <div class="col-xl-12">
                        <img
                          class="img-fluid"
                          src={require("./../../images/blog/2.jpg")}
                          alt="..."
                        />
                        <Link to={"#"} class="news-content">
                          <h6 class="mt-2 mb-3">
                            UK Trade Negotiators Eye Blockchain Provisions in
                            Coming US Trade Talks
                          </h6>
                        </Link>
                      </div>
                      <div class="col-xl-12">
                        <img
                          class="img-fluid"
                          src={require("./../../images/blog/3.jpg")}
                          alt="..."
                        />
                        <Link to={"#"} class="news-content">
                          <h6 class="mt-2 mb-3">
                            Bitcoin Options Saw Record Volume of $198M Amid
                            Recent Price Drop
                          </h6>
                        </Link>
                      </div>
                      <div class="col-xl-12">
                        <img
                          class="img-fluid"
                          src={require("./../../images/blog/4.jpg")}
                          alt="..."
                        />
                        <Link to={"#"} class="news-content">
                          <h6 class="mt-2 mb-3">
                            Blockforce Capital’s Crypto Fund Captures 86% of
                            Bitcoin’s Upside in 2020
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>

            <div class="col-xl-2 col-lg-6 col-md-6 col-xxl-6">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Your Position</h4>
                </div>
                <div class="card-body your-position">
                  <div class="slider-container">
                    <RangeSlider />
                  </div>

                  <button class="btn btn-primary btn-block mb-2">
                    Edit Leverage
                  </button>
                  <ul class="list-group">
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Position Leverage
                      <span class="strong"> 1.0x</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Size in BTC
                      <span class="strong"> 0.00254 BTC</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Contracts
                      <span class="strong"> 283</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Liquidation Price
                      <span class="strong">65850 USD</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Unrealized P&L
                      <span class="strong">15458 USD</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Unrealized ROE
                      <span class="strong">0.00 USD</span>
                    </li>
                    <li class="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                      Sell Cost @ 1.0x
                      <span class="strong">0.00 USD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-xl-10 col-lg-12 col-xxl-12">
              <Tab.Container defaultActiveKey="open-position">
                <div class="card">
                  <div class="card-header">
                    <Nav variant="pills">
                      <Nav.Link eventKey="open-position">
                        Open Position
                      </Nav.Link>
                      <Nav.Link eventKey="active-orders">
                        Active Orders
                      </Nav.Link>
                      <Nav.Link eventKey="fills">Fills</Nav.Link>
                      <Nav.Link eventKey="liguidition">Liguidition</Nav.Link>
                    </Nav>
                  </div>
                  <PerfectScrollbar>
                    <div class="card-body open-position-table">
                      <div class="market-history market-order">
                        <Tab.Content>
                          <Tab.Pane eventKey="open-position">
                            <div class="table-responsive">
                              <table class="table table-striped" id="tbUser">
                                <thead>
                                  <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Entry Value</th>
                                    <th scope="col">Entry Price</th>
                                    <th scope="col">Liq. Price</th>
                                    <th scope="col">Margin</th>
                                    <th scope="col">Eff. Lvg.</th>
                                    <th scope="col">Unrealized P&L (ROE %)</th>
                                    <th scope="col">Realized P&L</th>
                                    <th scope="col">Close</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5698.25</td>
                                    <td>0.3658745698 BTC</td>
                                    <td>0.32658745566</td>
                                    <td>0.95874585254 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>0.24566</td>
                                    <td>
                                      <i class="la la-close btnDelete"></i>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="active-orders">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Filled</th>
                                    <th scope="col">Remaining</th>
                                    <th scope="col">Limit Price</th>
                                    <th scope="col">Fill Price</th>
                                    <th scope="col">Rem. Value</th>
                                    <th scope="col">Stop Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Time</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fills">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Entry Price</th>
                                    <th scope="col">Entry Value</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">OrderID</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>5623.58</td>
                                    <td>5623.58</td>
                                    <td>0.24566 BTC</td>
                                    <td>07:25:35</td>
                                    <td>#2658455</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="liguidition">
                            <div class="table-responsive">
                              <table class="table table-striped">
                                <thead>
                                  <tr>
                                    <th scope="col">Symbol</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Value</th>
                                    <th scope="col">Entry Price</th>
                                    <th scope="col">Mark Price</th>
                                    <th scope="col">Margim</th>
                                    <th scope="col">Leverage</th>
                                    <th scope="col">Time</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">
                                      <i class="cc BTC"></i>
                                    </th>
                                    <td>BTC - USD</td>
                                    <td>5623.58</td>
                                    <td> - </td>
                                    <td>0.95874</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566 BTC</td>
                                    <td>0.24566</td>
                                    <td>0.02543</td>
                                    <td>Complete</td>
                                    <td>14:41:36</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </div>
                  </PerfectScrollbar>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default Dashboard;
