function [ Final_Data ] = Process()
% Process ���ݴ�����
%   ���������Ϣ���ɾ���

Final_Data=[];

%�����ʼ����

Init_Data=xlsread('�ս�����Ϣ.xlsx');
Conv_Data=xlsread('������Ϣ.xlsx');

%չ������

for i=1:size(Init_Data,1)
    for j=Init_Data(i,4):Init_Data(i,5)
        temp=[Init_Data(i,1:3),j,Init_Data(i,6:7)];
        Final_Data=[Final_Data temp'];
    end
end
Final_Data=Final_Data';

%��ӽ������ͺ͹�ģ

for i=1:size(Final_Data,1)
    j=find(Final_Data(i,1)==Conv_Data(:,1)&Final_Data(i,2)==Conv_Data(:,2)&Final_Data(i,3)==Conv_Data(:,3));
    Final_Data(i,7)=Conv_Data(j,4);
    Final_Data(i,8)=Conv_Data(j,5);
end


end