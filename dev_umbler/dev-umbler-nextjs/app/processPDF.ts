import * as pdfjsLib from 'pdfjs-dist';
import { TextItem } from 'pdfjs-dist/types/src/display/api';

pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/types/src/display/api';


function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const fileReader = new FileReader();
    fileReader.onload = onLoadFile;
    fileReader.readAsArrayBuffer(file!);

    function onLoadFile(event: ProgressEvent<FileReader>) {
      const typedarray = new Uint8Array(event.target?.result as ArrayBuffer)
      pdfjsLib.getDocument({
        data: typedarray
      }).promise.then((pdf) => {
        console.log("pdf carregado: ", pdf.numPages)

        pdf.getPage(1).then((page) => {
          page.getTextContent().then((content) => {
            let text = "";
            content.items.forEach((item) => {
              text += (item as TextItem).str + " ";
            });
            console.log("text: ", text);
          });
        });
      });
    };
}

export default onFileChange ;