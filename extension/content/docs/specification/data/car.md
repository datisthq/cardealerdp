---
title: Car
---

<p>A schema describing a car</p>
<h2>Fields</h2>
<table>
  <colgroup>
    <col width="25%"/>
    <col width="65%"/>
    <col width="10%"/>
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
      <td id="name">
        <code>name</code>
      </td>
      <td></td>
      <td>string</td>
    </tr>
    <tr>
      <td id="price">
        <code>price</code>
        *
      </td>
      <td>
        <p>The price of the car</p>
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
      <td>number</td>
    </tr>
  </tbody>
</table>