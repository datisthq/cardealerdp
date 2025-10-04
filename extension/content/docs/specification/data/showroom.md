---
title: Showroom
---

<p>A schema describing a car dealer showroom</p>
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
      <td id="id">
        <code>
          <strong>id</strong>
        </code>
      </td>
      <td>
        <p>Unique identifier for the showroom</p>
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
      <td id="title">
        <code>
          <strong>title</strong>
        </code>
      </td>
      <td>
        <p>The name of the showroom</p>
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
      <td id="country">
        <code>
          <strong>country</strong>
        </code>
      </td>
      <td>
        <p>Country where the showroom is located</p>
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
      <td id="region">
        <code>
          <strong>region</strong>
        </code>
      </td>
      <td>
        <p>State or region within the country</p>
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
      <td id="city">
        <code>
          <strong>city</strong>
        </code>
      </td>
      <td>
        <p>Closest city where the showroom is located</p>
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
      <td id="address">
        <code>
          <strong>address</strong>
        </code>
      </td>
      <td>
        <p>Street address of the showroom</p>
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
      <td id="postcode">
        <code>
          <strong>postcode?</strong>
        </code>
      </td>
      <td>
        <p>Postal code of the showroom location</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="phone">
        <code>
          <strong>phone?</strong>
        </code>
      </td>
      <td>
        <p>Contact phone number for the showroom</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="email">
        <code>
          <strong>email?</strong>
        </code>
      </td>
      <td>
        <p>Contact email address for the showroom</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="url">
        <code>
          <strong>url?</strong>
        </code>
      </td>
      <td>
        <p>URL to the showroom</p>
      </td>
      <td>
        <code>string</code>
      </td>
    </tr>
    <tr>
      <td id="lon">
        <code>
          <strong>lon?</strong>
        </code>
      </td>
      <td>
        <p>Longitude coordinate of the showroom location</p>
      </td>
      <td>
        <code>number</code>
      </td>
    </tr>
    <tr>
      <td id="lat">
        <code>
          <strong>lat?</strong>
        </code>
      </td>
      <td>
        <p>Latitude coordinate of the showroom location</p>
      </td>
      <td>
        <code>number</code>
      </td>
    </tr>
  </tbody>
</table>