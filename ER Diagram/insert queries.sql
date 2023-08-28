-- Products table insert query

INSERT INTO products (`id`,`description`,`exp_date`,`image_path`,`name`,`price`,`stock`,`category_id`) VALUES (1,'16GB RAM, 512 SSD','2023-08-31','images\\laptop.jfif','Laptop',90000,1000,1);
INSERT INTO products (`id`,`description`,`exp_date`,`image_path`,`name`,`price`,`stock`,`category_id`) VALUES (2,'PlayStation 5','2023-08-31','images\\playstation.jpg','PLayStation 5',30000,300,2);
INSERT INTO products (`id`,`description`,`exp_date`,`image_path`,`name`,`price`,`stock`,`category_id`) VALUES (3,'12 GB RAM, iOS','2023-08-31','images\\iphone13.jpg','iPhone 13 Pro',130000,299,3);


-- Categories table insert query

INSERT INTO urbankart.categories (`id`,`category_name`,`description`) VALUES (1,'Electronics','Electronics');
INSERT INTO urbankart.categories (`id`,`category_name`,`description`) VALUES (2,'Gaming','Gaming Accessories');
INSERT INTO urbankart.categories(`id`,`category_name`,`description`) VALUES (3,'Mobile','Mobile ');
