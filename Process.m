function [ Final_Data ] = Process()
% Process ���ݴ�����
%   ���������Ϣ���ɾ���
Final_Data=[];
%�����ʼ����
Init_Data=xlsread('�ս�����Ϣ.xlsx');
for i=1:size(Init_Data,1)
    for j=Init_Data(i,4):Init_Data(i,5)
        temp=[Init_Data(i,1:3),j,Init_Data(i,6:8)];
        Final_Data=[Final_Data temp'];
    end
end
Final_Data=Final_Data';
end