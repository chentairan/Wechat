function [ Final_Data ] = Process()
% Process 数据处理函数
%   处理教室信息生成矩阵
Final_Data=[];
%导入初始数据
Init_Data=xlsread('空教室信息.xlsx');
for i=1:size(Init_Data,1)
    for j=Init_Data(i,4):Init_Data(i,5)
        temp=[Init_Data(i,1:3),j,Init_Data(i,6:8)];
        Final_Data=[Final_Data temp'];
    end
end
Final_Data=Final_Data';
end