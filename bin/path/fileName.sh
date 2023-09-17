#!/bin/bash
# echo 'star cd'
# echo `expr 1 + 1`

# param=(1 2 3 4 5 6 7 8)

# for i in ${param[*]} # 这个in后面的要是输出的形式展示
# do 
# 	echo $i # 1 2 3 4 5 6 7 8
# done

# ls
# mkdir templeDir
# mv fileName ./templeDir
# cd ./templeDir
# vim fileName


# su parallels <<!
# G14789gyn
# exit
# !
# whoami


# su - parallels <<G4789gyn
# pwd;
# exit;
# EOF
# passwd=G14789gyn
# su - parallels
# $passwd
# whoami
# su - parallels <<EOF
# pwd;
# exit;
# EOF

# password="G14789gyn"
# su - parallels <<< "$password"
# whoami
# password="G14789gyn"
# echo 'test' | su parallels <<< $password
# whoami


#  echo 'zjk123' | sudo -S cp file1 /etc/hosts实现自动修改密码的脚本写法如下：echo 'password' | passwd -stdin username
# echo 'zjk123' | sudo -S parallels
# echo 'zjk123' | sudo -S su parallels]


# sudo -u root su - parallels
# whoami

# spawn su
# expect "Passward:"
# send "******\r"
# send "ls\n"
# #send "docker exec -it   e61f16df7591   /bin/bash /usr/local/tomcat/1.sh\n"
# interact


# mv fileName.zip scf.zip
unzip scf.zip
mv fileName scf   


