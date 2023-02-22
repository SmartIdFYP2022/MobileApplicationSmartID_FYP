/* AI_BASEDSMART ID Tables */

/*USER*/
CREATE TABLE USERS
(
Id Int Identity (1,1) Primary key not null,
FristName varchar(100) not null,
LastName varchar(100) not null,
DateOfBirth Datetime not null,
Gender varchar(10),
BloodGroup varchar(3) null,
Religion varchar(50) null,
Telephone varchar (20)  null,
PhoneNo varchar(20) not null,
City varchar(100) not null,
State varchar(100) not null,
Address nvarchar(max) not null,
CNIC varchar (15) null,
FatherCNIC varchar(15),
FatherOccupation varchar(100) null,
Domicile varchar(100) not null,
DepartmentId Int FOREIGN KEY REFERENCES DEPARTMENT(DepartmentId),
RoleId Int FOREIGN KEY REFERENCES USER_ROLES(RoleId),
IsStaffMember bit null,
EmployeeType varchar(100) null,
EmployeeStatus varchar(100) null,
ProfileImage varchar(255) null,
RegistrationNo nvarchar(max) not null,
UserEmail nvarchar(255) not null,
Password nvarchar(100) not null
)

/*DEPARTMENT*/
CREATE TABLE DEPARTMENT
(
DepartmentId Int Identity (1,1) Primary key not null,
DepartmentName varchar(150) not null
)

/*ROLES*/
CREATE TABLE USER_ROLES
(
RoleId Int Identity (1,1) Primary key not null,
RoleName varchar(255) not null,
CanDelete bit not null,
CanUpdate bit Not null,
CanRead bit not null,
CanWrite bit not null
)

/*IDENTIFICATION*/
CREATE TABLE FACE_IDENTIFICATION
(
IdentificationId Int Identity (1,1) Primary key not null,
Id Int FOREIGN KEY REFERENCES USERS(Id),
UserImages binary not null
)

/*Transaction Source*/
CREATE TABLE TRANSACTION_SOURCE
(
TransactionSourceID Int Identity (1,1) Primary key not null,
TransactionSourceName varchar(255) not null
)

/*Voucher*/
CREATE TABLE VOUCHER
(
VoucherID Int Identity (1,1) Primary key not null,
VoucherNumber varchar(255) not null,
VoucherDate Date not null,
TotalAmount int null,
VoucherStatus int not null,
Id Int FOREIGN KEY REFERENCES USERS(Id)
)

/*Transaction*/
CREATE TABLE TRANSACTIONS
(
TransactionID Int Identity (1,1) Primary key not null,
ModeOfRecognition int not null,
Id Int FOREIGN KEY REFERENCES USERS(Id),
TransactionSourceID Int FOREIGN KEY REFERENCES TRANSACTION_SOURCE(TransactionSourceID),
VoucherID Int FOREIGN KEY REFERENCES VOUCHER(VoucherID),
Amount int not null,
)