/**
 *
 * @author TSG
 * @name dsFlatsByGroup
 */ 
Select t1.lc_flat_id, t1.lc_regto, t1.lc_flatnumber, 
t1.registered_count, t1.lc_num, t1.usr_context 
From lc_flat t1
 Inner Join grp_lc_group t on t.lc_id = t1.lc_flat_id
 Where :parGroupID = t.group_id