from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QApplication, QWidget, QLabel, QTableWidgetItem
import sys
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl
import os
from main import *
from PyQt5.QtGui import QIcon, QPixmap


def table_to_list(table):
    result = []
    num_rows, num_cols = table.rowCount(), table.columnCount()
    for col in range(num_rows):
        rows = []
        for row in range(num_cols):
            item = table.item(col, row)
            rows.append(item.text() if item else '')
        result.append(rows)
    return result


def fill_table(table, content, mxn, dep):
    _translate = QtCore.QCoreApplication.translate
    table.setRowCount(int(mxn[0]))
    table.setColumnCount(int(mxn[1]))
    rows = [x.name for x in content]
    table.setHorizontalHeaderLabels(dep)
    table.setVerticalHeaderLabels(rows)
    for i in range(len(content)):
        for j in range(len(dep)):
            table.setItem(i, j,  QTableWidgetItem(content[i].trans[dep[j]]))



class Ui_Form(object):
    def setupUi(self, Form):
        Form.setObjectName("Form")
        Form.resize(923, 830)
        self.MachineTable = QtWidgets.QTableWidget(Form)
        self.MachineTable.setGeometry(QtCore.QRect(10, 10, 381, 351))
        self.MachineTable.setObjectName("MachineTable")
        self.MachineTable.setColumnCount(0)
        self.MachineTable.setRowCount(0)
        self.DetMachineTable = QtWidgets.QTableWidget(Form)
        self.DetMachineTable.setGeometry(QtCore.QRect(530, 10, 381, 351))
        self.DetMachineTable.setObjectName("DetMachineTable")
        self.DetMachineTable.setColumnCount(0)
        self.DetMachineTable.setRowCount(0)
        self.CreateB = QtWidgets.QPushButton(Form)
        self.CreateB.setGeometry(QtCore.QRect(390, 10, 141, 61))
        self.CreateB.setObjectName("CreateB")
        self.VisB = QtWidgets.QPushButton(Form)
        self.VisB.setGeometry(QtCore.QRect(390, 320, 141, 41))
        self.VisB.setObjectName("VisB")
        self.Viewer = QLabel(Form)
        self.Viewer.setGeometry(QtCore.QRect(10, 410, 381, 411))
        self.Viewer.setObjectName("Viewer")
        self.comboBox = QtWidgets.QComboBox(Form)
        self.comboBox.setGeometry(QtCore.QRect(390, 150, 141, 51))
        self.comboBox.setObjectName("comboBox")
        self.comboBox.addItem("")
        self.comboBox.addItem("")
        self.label = QtWidgets.QLabel(Form)
        self.label.setGeometry(QtCore.QRect(286, 370, 71, 31))
        self.label.setObjectName("label")
        self.rowsname = QtWidgets.QLineEdit(Form)
        self.rowsname.setGeometry(QtCore.QRect(360, 370, 111, 31))
        self.rowsname.setObjectName("rowsname")
        self.label_2 = QtWidgets.QLabel(Form)
        self.label_2.setGeometry(QtCore.QRect(500, 370, 101, 31))
        self.label_2.setObjectName("label_2")
        self.label_3 = QtWidgets.QLabel(Form)
        self.label_3.setGeometry(QtCore.QRect(10, 370, 111, 31))
        self.label_3.setObjectName("label_3")
        self.Msize = QtWidgets.QLineEdit(Form)
        self.Msize.setGeometry(QtCore.QRect(130, 370, 121, 31))
        self.Msize.setObjectName("Msize")
        self.colsname = QtWidgets.QLineEdit(Form)
        self.colsname.setGeometry(QtCore.QRect(620, 370, 113, 31))
        self.colsname.setObjectName("colsname")
        self.strucB = QtWidgets.QPushButton(Form)
        self.strucB.setGeometry(QtCore.QRect(750, 370, 141, 31))
        self.strucB.setObjectName("strucB")
        self.DetViewer = QLabel(Form)
        self.DetViewer.setGeometry(QtCore.QRect(530, 410, 381, 411))
        self.DetViewer.setObjectName("DetViewer")

        self.retranslateUi(Form)
        QtCore.QMetaObject.connectSlotsByName(Form)

    def retranslateUi(self, Form):
        _translate = QtCore.QCoreApplication.translate
        Form.setWindowTitle(_translate("Form", "Form"))
        self.CreateB.setText(_translate("Form", "?????????????????? \n"
" ?????????????????????????????????? \n"
" ??????????????"))
        self.VisB.setText(_translate("Form", "??????????????????????????????"))
        self.comboBox.setItemText(0, _translate("Form", "????????????????"))
        self.comboBox.setItemText(1, _translate("Form", "??????????????????????????????????"))
        self.label.setText(_translate("Form", "????????????:"))
        self.label_2.setText(_translate("Form", "??????????????:"))
        self.label_3.setText(_translate("Form", "????????????(mxn):"))
        self.strucB.setText(_translate("Form", "?????????????? ??????????????"))


class MainWindow(QtWidgets.QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.ui = Ui_Form()
        self.ui.setupUi(self)
        self.translate = QtCore.QCoreApplication.translate
        self.ui.VisB.clicked.connect(self.visualize)
        self.ui.CreateB.clicked.connect(self.createmachine)
        self.ui.strucB.clicked.connect(self.struct)
        self.ui.MachineTable.columnCount()

    def struct(self):
        self.m, self.n = self.ui.Msize.text().split('x')
        self.ui.MachineTable.setRowCount(int(self.m))
        self.ui.MachineTable.setColumnCount(int(self.n))
        self.cols = self.ui.colsname.text().split(',')
        self.rows = self.ui.rowsname.text().split(',')
        self.ui.MachineTable.setHorizontalHeaderLabels(self.cols)
        self.ui.MachineTable.setVerticalHeaderLabels(self.rows)

    def createmachine(self):
        result = table_to_list(self.ui.MachineTable)
        self.machine = Machine(result, self.cols, self.rows)
        self.machine.fillm()
        print(result)
        for i in range(len(self.machine.mach)):
            print(self.machine.mach[i].name + ': ', self.machine.mach[i].line)
        print(self.machine.mach)

        self.dmach = DMachine(self.machine.mach, self.cols)
        self.dmach.create()
        print(self.dmach.dm)
        fill_table(self.ui.DetMachineTable, self.dmach.dm,[self.m, self.n], self.cols)


    def visualize(self):
        if self.ui.comboBox.currentText() == '????????????????':
            self.machine.visualise()
            pixmap = QPixmap('./graph/machine.gv.png')
            self.ui.Viewer.setPixmap(pixmap)
        elif self.ui.comboBox.currentText() == '??????????????????????????????????':
            self.dmach.dvis()
            pixmapd = QPixmap('./graph/DetMachine.gv.png')
            self.ui.DetViewer.setPixmap(pixmapd)


app = QtWidgets.QApplication(sys.argv)
mainWindow = MainWindow()
widget = QtWidgets.QStackedWidget()
widget.setWindowTitle("Lab#4")

widget.addWidget(mainWindow)
widget.setFixedHeight(835)
widget.setFixedWidth(925)
widget.show()

sys.exit(app.exec_())