import React from 'react';
import Draggable from 'react-draggable';

function MyGrid() {
  const rows = Array.from({ length: 10 }, (_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: 10 }, (_, colIndex) => (
        <td key={colIndex} style={{ border: '1px solid #ccc', width: '10vw', height: '8vh' }}>
          {rowIndex === 0 && colIndex === 0 && (
            <Draggable bounds={{ left: 0, top: 0, right: '100%', bottom: '100%' }}>
              <button style={{ border: '1px solid #ccc' }}>Button</button>
            </Draggable>
          )}
        </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default MyGrid;
