import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";

export default (imgDataLists, userInfo, subjects, adminInfo, backgroundImg) => {
  const { vfs } = vfsFonts.pdfMake;
  pdfMake.vfs = vfs;

  const documentDefinition = {
    pageSize: "A4",
    pageOrientation: "portrait",
    pageMargins: [30, 50, 20, 25],
    header: function(currentPage) {
      if (currentPage > 1) {
        return [
          {
            canvas: [
              {
                type: "rect",
                x: 0,
                y: 0,
                w: 700,
                h: 50,
                linearGradient: [
                  "#ec693d 0%",
                  "#649aab 61%",
                  "#30add6 87%",
                  "#18b5e9 100%"
                ]
              }
            ]
          },
          {
            text: subjects[currentPage - 2],
            style: { fontSize: 28 },
            absolutePosition: { x: 50, y: 10 }
          }
        ];
      }
    },

    footer: function(currentPage) {
      if (currentPage === 1) {
        return {
          columns: [
            {
              text: adminInfo,
              alignment: "center"
            }
          ]
        };
      } else {
        return {
          columns: [
            {
              text: adminInfo,
              alignment: "left",
              margin: [50, 0, 0, 0],
              width: "70%",
              style: { fontSize: 10, color: "#818284" }
            },
            {
              text: "Arnold Studently | Page " + (currentPage - 1).toString(),
              alignment: "right",
              margin: [0, 0, 20, 0],
              width: "30%",
              style: { fontSize: 10, color: "#3F3E40" }
            }
          ]
        };
      }
    },
    content: [
      {
        image: backgroundImg,
        width: 600,
        height: 1122,
        absolutePosition: { x: 0, y: 0 }
      },
      {
        text: userInfo.test_date,
        alignment: "right"
      },
      {
        text: userInfo.version,
        alignment: "right"
      },
      {
        text: userInfo.name,
        alignment: "center",
        margin: [0, 300, 0, 0],
        style: { fontSize: 28 }
      },
      {
        text: userInfo.order,
        alignment: "center",
        margin: [0, 10, 0, 0],
        style: { fontSize: 32, bold: true }
      },
      {
        text: userInfo.test_type,
        alignment: "center",
        margin: [0, 10, 0, 0],
        style: { fontSize: 28, bold: true }
      },
      {
        text: userInfo.target,
        alignment: "center",
        margin: [0, 10, 0, 0],
        style: { fontSize: 28 },
        pageBreak: "after"
      }
    ],
    defaultStyle: {
      fontSize: 12,
      color: "#FFFFFF"
    }
  };
  imgDataLists.map(imgData => {
    documentDefinition.content.push(imgData);
  });
  pdfMake.createPdf(documentDefinition).download();
};
