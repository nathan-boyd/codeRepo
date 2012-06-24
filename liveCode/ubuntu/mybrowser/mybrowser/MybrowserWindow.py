# -*- Mode: Python; coding: utf-8; indent-tabs-mode: nil; tab-width: 4 -*-
### BEGIN LICENSE
# This file is in the public domain
### END LICENSE

import gettext
from gettext import gettext as _
gettext.textdomain('mybrowser')

from gi.repository import Gtk, WebKit # pylint: disable=E0611
import logging
logger = logging.getLogger('mybrowser')

from mybrowser_lib import Window
from mybrowser.AboutMybrowserDialog import AboutMybrowserDialog
from mybrowser.PreferencesMybrowserDialog import PreferencesMybrowserDialog

# See mybrowser_lib.Window.py for more details about how this class works
class MybrowserWindow(Window):
    __gtype_name__ = "MybrowserWindow"
    
    def finish_initializing(self, builder): # pylint: disable=E1002
        """Set up the main window"""
        super(MybrowserWindow, self).finish_initializing(builder)

        self.AboutDialog = AboutMybrowserDialog
        self.PreferencesDialog = PreferencesMybrowserDialog

        # Code for other initialization actions should be added here.

        self.buttonRefresh  = self.builder.get_object("buttonRefresh")
        self.entryURL       = self.builder.get_object("entryURL")
        self.windowScroll   = self.builder.get_object("windowScroll")
        self.toolbar        = self.builder.get_object("toolbar")

        context = self.toolbar.get_style_context()
        context.add_class(Gtk.STYLE_CLASS_PRIMARY_TOOLBAR)

        self.webview = WebKit.WebView()
        self.windowScroll.add(self.webview)
        self.webview.show()

    def on_buttonRefresh_clicked(self, widget):
        self.webview.reload()
        
    def on_entryURL_activate(self, widget):
        url = widget.get_text()
        self.webview.open(url)

    def on_windowScroll_clicked(self, widget):
        print "refresh"
