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
      <td id="name">
        <code>
          <strong>name?</strong>
        </code>
      </td>
      <td></td>
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
      <td>
        <code>number</code>
      </td>
    </tr>
  </tbody>
</table>
