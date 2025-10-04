---
title: Car
---

<p>A schema describing a car</p>
<h2>Fields</h2>
<table>
  <colgroup>
    <col width="20%"/>
    <col width="65%"/>
    <col width="15%"/>
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Definition</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td id="showroomid">
        <code>
          <strong>showroomId?</strong>
        </code>
      </td>
      <td>
        <p>Unique identifier for the showroom where the car is located</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="title">
        <code>
          <strong>title</strong>
        </code>
      </td>
      <td>
        <p>The title or name of the car listing</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            required:
            <code>true</code>
          </li>
        </ul>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="url">
        <code>
          <strong>url</strong>
        </code>
      </td>
      <td>
        <p>URL to the car listing</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            required:
            <code>true</code>
          </li>
        </ul>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="price">
        <code>
          <strong>price</strong>
        </code>
      </td>
      <td>
        <p>The price of the car in the currency specified</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            required:
            <code>true</code>
          </li>
          <li>
            minimum:
            <code>0</code>
          </li>
        </ul>
      </td>
      <td>
        <code>number</code>
      </td>
    </tr>
    <tr>
      <td id="currency">
        <code>
          <strong>currency</strong>
        </code>
      </td>
      <td>
        <p>Currency of the price</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            required:
            <code>true</code>
          </li>
        </ul>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="year">
        <code>
          <strong>year?</strong>
        </code>
      </td>
      <td>
        <p>Year of first registration (1900-2100)</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            minimum:
            <code>1900</code>
          </li>
        </ul>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="mileage">
        <code>
          <strong>mileage</strong>
        </code>
      </td>
      <td>
        <p>Odometer reading in kilometers</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            required:
            <code>true</code>
          </li>
          <li>
            minimum:
            <code>0</code>
          </li>
        </ul>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="brand">
        <code>
          <strong>brand?</strong>
        </code>
      </td>
      <td>
        <p>Car brand/manufacturer</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="model">
        <code>
          <strong>model?</strong>
        </code>
      </td>
      <td>
        <p>Car model name</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="version">
        <code>
          <strong>version?</strong>
        </code>
      </td>
      <td>
        <p>Specific version or trim level</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="fuel">
        <code>
          <strong>fuel?</strong>
        </code>
      </td>
      <td>
        <p>Fuel type</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="gearbox">
        <code>
          <strong>gearbox?</strong>
        </code>
      </td>
      <td>
        <p>Transmission type</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="category">
        <code>
          <strong>category?</strong>
        </code>
      </td>
      <td>
        <p>Vehicle category/body type</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="color">
        <code>
          <strong>color?</strong>
        </code>
      </td>
      <td>
        <p>Exterior color</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="door">
        <code>
          <strong>door?</strong>
        </code>
      </td>
      <td>
        <p>Number of doors</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="power">
        <code>
          <strong>power?</strong>
        </code>
      </td>
      <td>
        <p>Engine power in horsepower</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="cubics">
        <code>
          <strong>cubics?</strong>
        </code>
      </td>
      <td>
        <p>Engine displacement in cubic centimeters</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="seats">
        <code>
          <strong>seats?</strong>
        </code>
      </td>
      <td>
        <p>Number of seats</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="owners">
        <code>
          <strong>owners?</strong>
        </code>
      </td>
      <td>
        <p>Number of previous owners</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="month">
        <code>
          <strong>month?</strong>
        </code>
      </td>
      <td>
        <p>Month of first registration (1-12)</p>
        <strong>Constraints</strong>
        <ul>
          <li>
            minimum:
            <code>1</code>
          </li>
          <li>
            maximum:
            <code>12</code>
          </li>
        </ul>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="warranty">
        <code>
          <strong>warranty?</strong>
        </code>
      </td>
      <td>
        <p>Warranty duration in months</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="range">
        <code>
          <strong>range?</strong>
        </code>
      </td>
      <td>
        <p>Electric vehicle range in kilometers</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="battery">
        <code>
          <strong>battery?</strong>
        </code>
      </td>
      <td>
        <p>Battery capacity in kWh for electric vehicles</p>
      </td>
      <td>
        <code>integer</code>
      </td>
    </tr>
    <tr>
      <td id="plate">
        <code>
          <strong>plate?</strong>
        </code>
      </td>
      <td>
        <p>License plate number</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="vin">
        <code>
          <strong>vin?</strong>
        </code>
      </td>
      <td>
        <p>Vehicle Identification Number</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
  </tbody>
</table>