function [ Final_Data ] = Process()
% Process 数据处理函数
%   处理教室信息生成矩阵
Final_Data=[];

%导入初始数据
Init_Data=xlsread('空教室信息.xlsx');
[Conv_Datan,Conv_Datae]=xlsread('教室信息.xlsx');

%展开周数

for i=1:size(Init_Data,1)
    for j=Init_Data(i,4):Init_Data(i,5)
        temp=[Init_Data(i,1:3),j,Init_Data(i,6:7)];
        Final_Data=[Final_Data temp'];
    end
end
Final_Data=Final_Data';
%Final_Data=mat2cell(Final_Data,[size(Final_Data,1)],[1,1,1,1,1,1]);
%添加教室类型和规模

for i=1:size(Final_Data,1)
    if Final_Data(i,3)<9
        class_num=['0',num2str(Final_Data(i,3))];
    end
    class={[num2str(Final_Data(i,1)),num2str(Final_Data(i,2)),class_num]};
    
end


end