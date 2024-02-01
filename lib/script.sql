-- insert category
insert into guitar_merchant.category values ('1','Guitar');

-- insert brand
insert into guitar_merchant.brand values ('1','Fender','https://www.fmicassets.com/Damroot/Zoom/10001/0114912349_gtr_frt_001_rr.png');

-- insert product
INSERT INTO guitar_merchant.product (id, name, price, stock, sold, category_id, branch_id, image_url, description) VALUES ('1', 'Fender American Professional II Stratocaster', '30000', '10', '1', '1', '1', 'https://www.fmicassets.com/Damroot/Zoom/10001/0114912349_gtr_frt_001_rr.png', 'description');