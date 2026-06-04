/**
 * Defines the contents of the tooltip. See CSS for tooltip styling. The tooltip
 * features the country name, population, GDP, and CO2 emissions, preceded
 * by a label and followed by units where applicable.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContents (d) {
  return '<b>Country: </b><span class="tooltip-value">' + d['Country Name'] + '</span><br>' +
    '<b>Population: </b><span class="tooltip-value">' + d.Population.toLocaleString() + '</span><br>' +
    '<b>GDP per capita: </b><span class="tooltip-value">' + d.GDP.toFixed(2) + ' $ USD</span><br>' +
    '<b>CO2 per capita: </b><span class="tooltip-value">' + d.CO2.toFixed(2) + ' metric tons</span>'
}
