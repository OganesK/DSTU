

from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QTableWidgetItem
import sys
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl
import os
#from main import *
from PyQt5.QtGui import QIcon, QPixmap


def addTableRow(table, row_data):
    row = table.rowCount()
    table.setRowCount(row + 1)
    col = 0
    for item in row_data:
        cell = QTableWidgetItem(item)
        table.setItem(row, col, cell)
        col += 1
class Ui_Form(object):
    def setupUi(self, Form):
        Form.setObjectName("Form")
        Form.resize(923, 830)
        self.MachineTable = QtWidgets.QTableWidget(Form)
        self.MachineTable.setGeometry(QtCore.QRect(10, 10, 381, 351))
        self.MachineTable.setObjectName("MachineTable")
        self.MachineTable.setColumnCount(0)
        self.MachineTable.setRowCount(1)
        item = QtWidgets.QTableWidgetItem()
        self.MachineTable.setVerticalHeaderItem(0, item)
        self.DetMachineTable = QtWidgets.QTableWidget(Form)
        self.DetMachineTable.setGeometry(QtCore.QRect(530, 10, 381, 351))
        self.DetMachineTable.setObjectName("DetMachineTable")
        self.DetMachineTable.setColumnCount(0)
        self.DetMachineTable.setRowCount(0)
        self.CreateB = QtWidgets.QPushButton(Form)
        self.CreateB.setGeometry(QtCore.QRect(400, 10, 121, 61))
        self.CreateB.setObjectName("CreateB")
        self.VisB = QtWidgets.QPushButton(Form)
        self.VisB.setGeometry(QtCore.QRect(400, 320, 121, 41))
        self.VisB.setObjectName("VisB")
        self.Viewer = QLabel(Form)
        self.Viewer.setGeometry(QtCore.QRect(10, 410, 381, 411))
        self.Viewer.setObjectName("Viewer")
        self.comboBox = QtWidgets.QComboBox(Form)
        self.comboBox.setGeometry(QtCore.QRect(400, 150, 121, 51))
        self.comboBox.setObjectName("comboBox")
        self.comboBox.addItem("")
        self.comboBox.addItem("")
        self.row = QtWidgets.QPushButton(Form)
        self.row.setGeometry(QtCore.QRect(10, 370, 91, 31))
        self.row.setObjectName("row")
        self.rowname = QtWidgets.QLineEdit(Form)
        self.rowname.setGeometry(QtCore.QRect(110, 370, 81, 31))
        self.rowname.setObjectName("rowname")
        self.col = QtWidgets.QPushButton(Form)
        self.col.setGeometry(QtCore.QRect(200, 370, 101, 31))
        self.col.setObjectName("col")
        self.colname = QtWidgets.QLineEdit(Form)
        self.colname.setGeometry(QtCore.QRect(310, 370, 81, 31))
        self.colname.setObjectName("colname")

        self.retranslateUi(Form)
        QtCore.QMetaObject.connectSlotsByName(Form)

    def retranslateUi(self, Form):
        _translate = QtCore.QCoreApplication.translate
        Form.setWindowTitle(_translate("Form", "Form"))
        self.CreateB.setText(_translate("Form", "Построить \n"
" детерминированный \n"
" автомат"))
        self.VisB.setText(_translate("Form", "Визуализировать"))
        self.comboBox.setItemText(0, _translate("Form", "Исходный"))
        self.comboBox.setItemText(1, _translate("Form", "Детерминированный"))
        self.row.setText(_translate("Form", "Добавить строку"))
        self.col.setText(_translate("Form", "Добавить столбец"))
        item = self.MachineTable.verticalHeaderItem(0)
        item.setText(_translate("Form", "S0"))

class MainWindow(QtWidgets.QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        self.translate = QtCore.QCoreApplication.translate
        self.ui.VisB.clicked.connect(self.visualize)
        self.ui.CreateB.clicked.connect(self.createmachine)
        self.ui.row.clicked.connect(self.addrow)
        self.ui.col.clicked.connect(self.addcol)

    def addrow(self):
        rows = self.ui.rowname.text().split(',')
        print(rows)
        addTableRow(self.ui.MachineTable, rows)

    def addcol(self):
        cols = self.ui.colname.text().split(',')
        self.ui.MachineTable.setHorizontalHeaderLabels(self.ui.colname.text().split(','))
        for i in range(len(cols)):
            self.ui.MachineTable.horizontalHeaderItem(i).setTextAlignment(Qt.AlignLeft)






    def visualize(self):
        pixmap = QPixmap('./graph/machine.gv.png')
        self.ui.Viewer.setPixmap(pixmap)

    def createmachine(self):
        _translate = QtCore.QCoreApplication.translate
        item = self.ui.MachineTable.horizontalHeaderItem(4)
        item.setText(_translate("Form", "Кнопка"))







app = QtWidgets.QApplication(sys.argv)
mainWindow = MainWindow()
widget = QtWidgets.QStackedWidget()
widget.setWindowTitle("Lab#4")

widget.addWidget(mainWindow)
widget.setFixedHeight(835)
widget.setFixedWidth(925)
widget.show()

sys.exit(app.exec_())