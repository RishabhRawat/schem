var sch = new Module.schematicGenerator();

jsonData = {
  "creator": "Yosys 0.6+135 (git sha1 ca91bcc, clang 3.4-1ubuntu3 -fPIC -Os)",
  "modules": {
    "up3down5": {
      "ports": {
        "clock": {
          "direction": "input",
          "bits": [ 2 ]
        },
        "data_in": {
          "direction": "input",
          "bits": [ 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
        },
        "up": {
          "direction": "input",
          "bits": [ 12 ]
        },
        "down": {
          "direction": "input",
          "bits": [ 13 ]
        },
        "carry_out": {
          "direction": "output",
          "bits": [ 14 ]
        },
        "borrow_out": {
          "direction": "output",
          "bits": [ 15 ]
        },
        "count_out": {
          "direction": "output",
          "bits": [ 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
        },
        "parity_out": {
          "direction": "output",
          "bits": [ 25 ]
        }
      },
      "cells": {
        "$add$tests/simple/fiedler-cooley.v:17$3": {
          "hide_name": 1,
          "type": "$add",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 9,
            "B_SIGNED": 0,
            "B_WIDTH": 2,
            "Y_WIDTH": 10
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:17"
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
            "B": [ "1", "1" ],
            "Y": [ 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 ]
          }
        },
        "$and$tests/simple/fiedler-cooley.v:28$5": {
          "hide_name": 1,
          "type": "$and",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 1,
            "B_SIGNED": 0,
            "B_WIDTH": 1,
            "Y_WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:28"
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 12 ],
            "B": [ 35 ],
            "Y": [ 36 ]
          }
        },
        "$and$tests/simple/fiedler-cooley.v:29$6": {
          "hide_name": 1,
          "type": "$and",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 1,
            "B_SIGNED": 0,
            "B_WIDTH": 1,
            "Y_WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:29"
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 13 ],
            "B": [ 37 ],
            "Y": [ 38 ]
          }
        },
        "$procdff$12": {
          "hide_name": 1,
          "type": "$dff",
          "parameters": {
            "CLK_POLARITY": 1,
            "WIDTH": 9
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          },
          "port_directions": {
            "CLK": "input",
            "D": "input",
            "Q": "output"
          },
          "connections": {
            "CLK": [ 2 ],
            "D": [ 39, 40, 41, 42, 43, 44, 45, 46, 47 ],
            "Q": [ 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
          }
        },
        "$procdff$13": {
          "hide_name": 1,
          "type": "$dff",
          "parameters": {
            "CLK_POLARITY": 1,
            "WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          },
          "port_directions": {
            "CLK": "input",
            "D": "input",
            "Q": "output"
          },
          "connections": {
            "CLK": [ 2 ],
            "D": [ 36 ],
            "Q": [ 14 ]
          }
        },
        "$procdff$14": {
          "hide_name": 1,
          "type": "$dff",
          "parameters": {
            "CLK_POLARITY": 1,
            "WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          },
          "port_directions": {
            "CLK": "input",
            "D": "input",
            "Q": "output"
          },
          "connections": {
            "CLK": [ 2 ],
            "D": [ 38 ],
            "Q": [ 15 ]
          }
        },
        "$procdff$15": {
          "hide_name": 1,
          "type": "$dff",
          "parameters": {
            "CLK_POLARITY": 1,
            "WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          },
          "port_directions": {
            "CLK": "input",
            "D": "input",
            "Q": "output"
          },
          "connections": {
            "CLK": [ 2 ],
            "D": [ 48 ],
            "Q": [ 25 ]
          }
        },
        "$procmux$10_CMP0": {
          "hide_name": 1,
          "type": "$eq",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 2,
            "B_SIGNED": 0,
            "B_WIDTH": 1,
            "Y_WIDTH": 1
          },
          "attributes": {
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 13, 12 ],
            "B": [ "1" ],
            "Y": [ 49 ]
          }
        },
        "$procmux$11_CMP0": {
          "hide_name": 1,
          "type": "$logic_not",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 2,
            "Y_WIDTH": 1
          },
          "attributes": {
          },
          "port_directions": {
            "A": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 13, 12 ],
            "Y": [ 50 ]
          }
        },
        "$procmux$7": {
          "hide_name": 1,
          "type": "$pmux",
          "parameters": {
            "S_WIDTH": 4,
            "WIDTH": 9
          },
          "attributes": {
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "S": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ "x", "x", "x", "x", "x", "x", "x", "x", "x" ],
            "B": [ 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 51, 52, 53, 54, 55, 56, 57, 58, 59, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
            "S": [ 60, 61, 49, 50 ],
            "Y": [ 39, 40, 41, 42, 43, 44, 45, 46, 47 ]
          }
        },
        "$procmux$8_CMP0": {
          "hide_name": 1,
          "type": "$eq",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 2,
            "B_SIGNED": 0,
            "B_WIDTH": 2,
            "Y_WIDTH": 1
          },
          "attributes": {
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 13, 12 ],
            "B": [ "1", "1" ],
            "Y": [ 60 ]
          }
        },
        "$procmux$9_CMP0": {
          "hide_name": 1,
          "type": "$eq",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 2,
            "B_SIGNED": 0,
            "B_WIDTH": 2,
            "Y_WIDTH": 1
          },
          "attributes": {
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 13, 12 ],
            "B": [ "0", "1" ],
            "Y": [ 61 ]
          }
        },
        "$reduce_xor$tests/simple/fiedler-cooley.v:27$4": {
          "hide_name": 1,
          "type": "$reduce_xor",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 9,
            "Y_WIDTH": 1
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:27"
          },
          "port_directions": {
            "A": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 39, 40, 41, 42, 43, 44, 45, 46, 47 ],
            "Y": [ 48 ]
          }
        },
        "$sub$tests/simple/fiedler-cooley.v:16$2": {
          "hide_name": 1,
          "type": "$sub",
          "parameters": {
            "A_SIGNED": 0,
            "A_WIDTH": 9,
            "B_SIGNED": 0,
            "B_WIDTH": 3,
            "Y_WIDTH": 10
          },
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:16"
          },
          "port_directions": {
            "A": "input",
            "B": "input",
            "Y": "output"
          },
          "connections": {
            "A": [ 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
            "B": [ "1", "0", "1" ],
            "Y": [ 51, 52, 53, 54, 55, 56, 57, 58, 59, 37 ]
          }
        }
      },
      "netnames": {
        "$0\\borrow_out[0:0]": {
          "hide_name": 1,
          "bits": [ 38 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$0\\carry_out[0:0]": {
          "hide_name": 1,
          "bits": [ 36 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$0\\cnt_dn[9:0]": {
          "hide_name": 1,
          "bits": [ 51, 52, 53, 54, 55, 56, 57, 58, 59, 37 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$0\\cnt_up[9:0]": {
          "hide_name": 1,
          "bits": [ 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$0\\count_nxt[8:0]": {
          "hide_name": 1,
          "bits": [ 39, 40, 41, 42, 43, 44, 45, 46, 47 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$0\\parity_out[0:0]": {
          "hide_name": 1,
          "bits": [ 48 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:14"
          }
        },
        "$procmux$10_CMP": {
          "hide_name": 1,
          "bits": [ 49 ],
          "attributes": {
          }
        },
        "$procmux$11_CMP": {
          "hide_name": 1,
          "bits": [ 50 ],
          "attributes": {
          }
        },
        "$procmux$8_CMP": {
          "hide_name": 1,
          "bits": [ 60 ],
          "attributes": {
          }
        },
        "$procmux$9_CMP": {
          "hide_name": 1,
          "bits": [ 61 ],
          "attributes": {
          }
        },
        "borrow_out": {
          "hide_name": 0,
          "bits": [ 15 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:9"
          }
        },
        "carry_out": {
          "hide_name": 0,
          "bits": [ 14 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:9"
          }
        },
        "clock": {
          "hide_name": 0,
          "bits": [ 2 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:6"
          }
        },
        "count_out": {
          "hide_name": 0,
          "bits": [ 16, 17, 18, 19, 20, 21, 22, 23, 24 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:8"
          }
        },
        "data_in": {
          "hide_name": 0,
          "bits": [ 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:5"
          }
        },
        "down": {
          "hide_name": 0,
          "bits": [ 13 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:6"
          }
        },
        "parity_out": {
          "hide_name": 0,
          "bits": [ 25 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:9"
          }
        },
        "up": {
          "hide_name": 0,
          "bits": [ 12 ],
          "attributes": {
            "src": "tests/simple/fiedler-cooley.v:6"
          }
        }
      }
    }
  }
}

string = JSON.stringify(jsonData)
// console.log(string);
var structure = sch.createJsonSchematicFromJson(string);
var data = JSON.parse(structure);
console.log(structure);

var createRectChild = function (svgElem, x, y, size_x, size_y, strokeWidth) {
  svgElem.rect(size_x,size_y).attr({x: x, y: y, fill: '#fff'}).stroke({ width: 1 });
  return svgElem.nested().size(size_x,size_y).attr({x: x, y: y});
}


var draw = SVG('drawing').size(data.size_x+6,data.size_y+6);
var tRect = createRectChild(draw, 0, 0, data.size_x, data.size_y, 1); 

for( i = 0; i < data.partitions.length; i++ ) {
  var partition = data.partitions[i];
  var pRect = createRectChild(tRect, data.offset_x + partition.pos_x, data.offset_y + partition.pos_y, partition.size_x, partition.size_y, 1);
  for( j = 0; j < partition.boxes.length; j++ ) {
    var box = partition.boxes[j];
    var bRect = createRectChild(pRect, partition.offset_x + box.pos_x, partition.offset_y + box.pos_y, box.size_x, box.size_y, 1);
    for( k = 0; k < box.modules.length; k++ ) {
      var mod = box.modules[k];
      var mRect = createRectChild(bRect, box.offset_x + mod.pos_x, box.offset_y + mod.pos_y, mod.size_x, mod.size_y, 1);
      console.log(box.offset_x + mod.pos_x, box.offset_y + mod.pos_y, mod.size_x, mod.size_y);
      console.log(mod.pos_x, mod.pos_y, mod.size_x, mod.size_y);
    }
  }
}