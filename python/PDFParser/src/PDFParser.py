#!/usr/bin/env python3

import os
import datetime
import sys
import io
import getopt

from pdfminer.pdfinterp import PDFResourceManager, process_pdf
from pdfminer.pdfdevice import TagExtractor
from pdfminer.converter import XMLConverter, HTMLConverter, TextConverter
from pdfminer.layout import LAParams
from pdfminer.utils import set_debug_logging

class parser:

    debug       = True
    password    = ''
    pagenos     = set()
    maxpages    = 0
    fname       = "example.pdf"
    outfile     = "output.txt"
    outdir      = None
    layoutmode  = 'normal'
    codec       = 'utf-8'
    pageno      = 1
    scale       = 1
    caching     = True
    showpageno  = True
    outtype     = 'txt'
    rsrcmgr     = PDFResourceManager(caching = caching)
    laparams    = LAParams()

    def log(self, message):
        if self.debug:
            print (str(datetime.datetime.now()) + ": " + message)

    def __init__(self):
#         self.log("pdfparser initialized")
#         fp = open('example.pdf', 'rb')
#         parser = PDFParser(fp)
#         self.doc = PDFDocument()
#         parser.set_document(self.doc)
#         self.doc.set_parser(parser)
#         self.doc.initialize('password')
#
#         self.printTOC()
#         self.foo()


        if not self.outtype:
            self.outtype = 'text'
            if self.outfile:
                if self.outfile.endswith('.htm') or self.outfile.endswith('.html'):
                    self.outtype = 'html'
                elif self.outfile.endswith('.xml'):
                    self.outtype = 'xml'
                elif self.outfile.endswith('.tag'):
                    self.outtype = 'tag'

        outfp = io.open(self.outfile, 'wt', encoding = self.codec, errors = 'ignore')

        if self.outtype == 'text':
            self.device = TextConverter(self.rsrcmgr, outfp, laparams = self.laparams)
        elif self.outtype == 'xml':
            self.device = XMLConverter(self.rsrcmgr, outfp, laparams = self.laparams, outdir = self.outdir)
        elif self.outtype == 'html':
            self.device = HTMLConverter(self.rsrcmgr, outfp, scale = self.scale, layoutmode = self.layoutmode,
                laparams = self.laparams, outdir = self.outdir, debug = self.debug)
        elif self.outtype == 'tag':
            self.device = TagExtractor(self.rsrcmgr, outfp)
        else:
            self.device = TextConverter(self.rsrcmgr, outfp, laparams = self.laparams)

        fp = io.open(self.fname, 'rb')
        process_pdf(self.rsrcmgr, self.device, fp, self.pagenos, maxpages = self.maxpages, password = self.password, caching = self.caching, check_extractable = True)
        fp.close()
        self.device.close()



if __name__ == "__main__":
    parser = parser()
