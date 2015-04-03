/**
 *
 * @author TSG
 * @name dsMainGroup
 */ 
Select * 
From grp_groups t1
 Inner Join grp_type t on t.grp_type_id = t1.grp_type
 Where t.main_group = true
 and :parParent = t1.grp_parent