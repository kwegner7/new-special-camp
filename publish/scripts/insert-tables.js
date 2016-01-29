
/*
 * FUNCTIONS
 */

/*
    <div class=centered>
    <h2>These are the links to the Med Schedule Items Database:</h2> 
        <div class="indent">
        <table width=100%>
          <thead hidden>
          <tr>
             <th width=70px>&nbsp;</th>
             <th>&nbsp;</th>
          </tr>
          </thead>
          <tfoot hidden>
          <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
          </tr>
          </tfoot>
          <tbody id=med_schedule></tbody>
        </table>
        </div>
    </div>
*/




function insertTable(id_of_table) {

    var lines = "";

    lines += 
       "<table width=100%>\
          <thead hidden>\
          <tr>\
             <th width=70px>&nbsp;</th>\
             <th>&nbsp;</th>\
          </tr>\
          </thead>\
          <tfoot hidden>\
          <tr>\
              <td>&nbsp;</td>\
              <td>&nbsp;</td>\
          </tr>\
          </tfoot>\
          <tbody id=med_schedule>\
<tr>\
<td width=70px><span class=colorblack>(M7)</span></td>\
<td><a class=goto href=https://www.quickbase.com/db/bi8b6igq7?a=q&amp;qid=54 target=_blank>\
Campers Accepted, alphabetized with e-mail addresses</a>\
</td>\
</tr>\
          </tbody>\
        </table>";




    return lines;
}

/*
 * INSERT HTML CODE - innerHTML is the content between the tag open and close
 */

// document.getElementById("campers_tbl").innerHTML      = insertTable("campers");
// document.getElementById("meds_tbl").innerHTML         = insertTable("meds");
document.getElementById("med_schedule_tbl").innerHTML = insertTable("med_schedule");


