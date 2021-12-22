#include <windows.h>
#include <fstream>
#include <string>
#include <iostream>
#include <iomanip>


using namespace std;

struct list
{
    string name;
    int time;
};
const int n = 10;
list mas[n];
list wr[n];
/*
void Zap(){
	for (int i = 0; i<n; i++)
	{
		mas[i].name = "tructur";
		mas[i].time = i;
		//cout << mas[i].name << " " << mas[i].time <<  endl;
	}
	cout << endl;
}

void write_f(){
	ofstream f("t.txt");
	for (int i = 0; i<n; i++)
		f << mas[i].name << " " << mas[i].time <<"\n";
	f.clear();
}



void Read_file(){
	ifstream f("t_1.txt");
	for (int i = 0; i < n;i++){
			f>> mas[i].name>>mas[i].time;
			cout << mas[i].name << " " << mas[i].time;
			cout << endl;
		}

}*/



int main()
{
    STARTUPINFO si;					//��������� �� ��������� ���� STARTUPINFO, ���������� ���������� � ������� ��������
    PROCESS_INFORMATION pi;			// ������������ �������� ����������� � �������������� ID �������� � ��� �������� ������
    //si.hStdOutput =// ������ � ����


    ZeroMemory(&si, sizeof(si));	//������� ��������� ������ ������ ����������, ������� � ������ ����� � ������ �� ������ �� ��������� � ������ ����������, ������� ���� �� ��������
    si.cb = sizeof(si);
    ZeroMemory(&pi, sizeof(pi));

    ifstream fp("processes.txt");
    ofstream fr("report.txt");
    for (int i = 0; i < n; i++){
        fp >> mas[i].name;
        fp >> mas[i].time;
        string a = mas[i].name;
        wstring s;
        s.assign(a.begin(), a.end());
        int b = mas[0].time;
        if (CreateProcess(s.c_str(), NULL, NULL, NULL, FALSE, NORMAL_PRIORITY_CLASS, NULL, NULL, &si, &pi)){
            //cout << i << endl;
            CloseHandle(pi.hThread);
            //if (WaitForSingleObject(pi.hProcess, 5 * 1000) == WAIT_TIMEOUT){
            if (WaitForSingleObject(pi.hProcess, b) == WAIT_TIMEOUT){
                TerminateProcess(pi.hProcess, 0);
                fr << left << setw(35) << mas[i].name << right << setw(15) << "��������" << endl;
            }
            else fr << left << setw(35) << mas[i].name << right << setw(15) << "�� ��������" << endl;
            CloseHandle(pi.hProcess);
        }

    }


    system("pause");
    return 0;
}