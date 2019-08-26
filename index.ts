import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { PdfViewer, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
ThumbnailView, Print, TextSelection, TextSearch, Annotation} from '@syncfusion/ej2-pdfviewer';
// tslint:disable-next-line:max-line-length
PdfViewer.Inject(Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation);

/**
 * Default PdfViewer sample
 */

    
    let viewer: PdfViewer = new PdfViewer();
    viewer.serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer';
    viewer.appendTo('#pdfViewer');
    viewer.load('PDF_Succinctly.pdf', null);
